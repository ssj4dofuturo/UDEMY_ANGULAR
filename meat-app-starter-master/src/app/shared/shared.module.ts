import { NgModel, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, SnackbarComponent,
              RatingComponent, CommonModule,
              FormsModule, ReactiveFormsModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, RestaurantsService, OrderService, NotificationService], 
        }
    }
}