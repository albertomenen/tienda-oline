"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"

export function CartSummary() {

  // The sumup of the cart 
  const {formattedTotalPrice, totalPrice, cartDetails, cartCount, redirectToCheckout} = useShoppingCart()

  // the loading part
  const [isLoading, setLoading] = useState(false)

  // To control the checkout when is loading 
  const isDisable = isLoading || cartCount! == 0

  // shipping cost 
  const shippingAmount = cartCount! > 0 ? 500 : 0

  // the total ammount of the cart calculation
  const totalAmount = totalPrice! + shippingAmount


  // this is the function for the checkout 

  async function onCheckout() {
    try {
      setLoading(true)
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(cartDetails)
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const rawResponse = await response.text();
      console.log(rawResponse);
  
      const data = JSON.parse(rawResponse);
      const result = await redirectToCheckout(data.id)
      if (result?.error) {
        console.log(result)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">{formatCurrencyString({value: shippingAmount, currency: "EUR"})}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">{formatCurrencyString({value: totalAmount, currency: "EUR"})}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button onClick = {onCheckout} className="w-full" disabled = {isDisable} >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Cargando..." : "Pagar"}
        </Button>
      </div>
      
    </section>
  )
}
