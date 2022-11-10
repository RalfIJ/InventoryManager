package nl.snaveltool.routes

import com.example.models.productStorage
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.productRouting() {
    route("/products") {
        get {
            if (productStorage.isNotEmpty()) {
                call.respond(productStorage)
            } else {
                call.respondText("No products found", status = HttpStatusCode.OK)
            }

        }
    }
}