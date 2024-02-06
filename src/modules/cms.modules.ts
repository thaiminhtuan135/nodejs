import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [PostsModule, UserModule, StripeModule],
})
export class CmsModules {}
