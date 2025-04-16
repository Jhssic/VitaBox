/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly supabase: SupabaseService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const { data: user, error } = await this.supabase.client
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha_hash);
    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const { senha_hash, ...resto } = user;
    return resto;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
