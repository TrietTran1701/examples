import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { __name__Component } from "./__name__(kebabCase)-list/__name__(kebabCase)-list.component"
import { AuthGuard } from "src/app/auth/guards/auth.guard"

const routes: Routes = [
  {
    path: "",
    component: __name__Component,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class __name__RoutingModule {}
