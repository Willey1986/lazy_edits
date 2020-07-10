import { Module, Global } from '@nestjs/common';
import { ToIntPipe } from './to-int.pipe';

@Global()
@Module({
  controllers: [],
  providers: [ToIntPipe],
  exports: [ToIntPipe],
})
export class ApiUtilModule {}
