import { NgModule } from "@angular/core"
import { CommonModule, DatePipe } from "@angular/common"

import { __name__RoutingModule } from "./__name__(kebabCase)-routing.module"
import { __name__ListComponent } from "./__name__(kebabCase)-list/__name__(kebabCase)-list.component"

import { ComponentsModule } from "src/app/shared/components/components.module"
import { SharedModule } from "src/app/shared/shared.module"
import { DataFormatPipe } from "src/app/shared/pipes/data-format.pipe"
import { FileHelper } from "src/app/helpers"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"

import { __name__EditDialogComponent } from "./__name__(kebabCase)-list/dialogs/__name__(kebabCase)-edit-dialog/__name__(kebabCase)-edit-dialog.component"
import { __name__ImportExcelDialogComponent } from "./__name__(kebabCase)-list/dialogs/__name__(kebabCase)-import-excel-dialog/__name__(kebabCase)-import-excel-dialog.component"

@NgModule({
  declarations: [
    __name__ListComponent,
    __name__EditDialogComponent,
    __name__ImportExcelDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    __name__RoutingModule,
    StoreModule.forFeature("example-store", {}),
    EffectsModule.forFeature([]),
  ],
  providers: [DatePipe, DataFormatPipe, FileHelper],
})
export class CustomerMasterModule {}
