package com.example.models

import kotlinx.serialization.Serializable

@Serializable
data class Product(val id: Int, val name: String, val quantity: Int)

val productStorage = mutableListOf<Product>(
    Product(1, "Foot toy", 5),
    Product(2, "Houten speeltje", 1),
    Product(3, "Balsa houten speeltje", 0)
)