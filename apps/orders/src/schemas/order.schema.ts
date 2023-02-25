import { AbstractDocument } from '@app/common';
import { Schema } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {}
