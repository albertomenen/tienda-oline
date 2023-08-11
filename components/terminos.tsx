import "@/styles/globals.css"
import React from 'react';
import Image from "next/image"
import { shimmer, toBase64 } from "@/lib/image"

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const About: React.FC = () => {
  return (
    <div className="terminos-div">         
      <main className="terminos-main">
        <h1 className=" terminos-h1">Terminos y condiciones</h1>
        <div>
        <Image
         priority
          src="/terminos-hero.png"
          alt={`Perfume Image`}
         width={2176}
          height={544}
          quality={100}
         placeholder="blur"
         blurDataURL={`data: image/svg+xml; base64,${toBase64(shimmer(600,750))}`}
         className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
       />
        <p className="terminos-p">

1. Introducción

Estos Términos y Condiciones (en lo sucesivo, los Términos) rigen el acceso y el uso de nuestro sitio web (en lo sucesivo, el Sitio) y la compra de productos a través del Sitio (en lo sucesivo, los Productos). Al acceder o utilizar el Sitio o al comprar Productos, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, no debe acceder ni utilizar el Sitio ni comprar Productos.

2. Información de la empresa

Este Sitio es operado por [nombre de la empresa]. Nuestra dirección física es [dirección]. Puede contactarnos por correo electrónico a [dirección de correo electrónico] o por teléfono al [número de teléfono].

3. Productos

Ofrecemos una variedad de productos, incluidos perfumes, fragancias y otros productos de belleza. Los precios de nuestros Productos se muestran en el Sitio. Nos reservamos el derecho de cambiar los precios de nuestros Productos en cualquier momento.

4. Pedidos

Puede realizar un pedido para Productos en el Sitio agregando los Productos que desea comprar a su carrito de compras y luego pagando por los Productos. Una vez que haya pagado por los Productos, le enviaremos un correo electrónico de confirmación.

5. Envío

Enviamos nuestros Productos a todo el mundo. Los gastos de envío se calculan en función del peso y el destino de su pedido. Se le informará los gastos de envío antes de realizar el pago.

6. Devoluciones

Puede devolver los Productos comprados en el Sitio dentro de los 30 días posteriores a la recepción de los Productos. Para devolver un Producto, debe contactarnos por correo electrónico o por teléfono y proporcionarnos su número de pedido y la razón de la devolución. Le enviaremos una etiqueta de devolución prepagada. Una vez que hayamos recibido el Producto devuelto, le reembolsaremos el precio de compra del Producto.

7. Responsabilidad

Nos esforzamos por proporcionar Productos de alta calidad. Sin embargo, si no está satisfecho con un Producto, puede devolverlo de acuerdo con la sección 6 anterior.

No somos responsables de ningún daño indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de usar el Sitio o los Productos, incluso si se nos ha informado de la posibilidad de tales daños.

8. Ley aplicable

Estos Términos se regirán e interpretarán de acuerdo con las leyes de [país]. Usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales de [país] en relación con cualquier disputa que surja de estos Términos.

9. Otros términos

Si alguna disposición de estos Términos es inválida o inaplicable, dicha disposición se eliminará y las disposiciones restantes permanecerán en pleno vigor y efecto.

Estos Términos constituyen el acuerdo completo entre usted y nosotros con respecto al uso del Sitio y reemplazan todos los acuerdos anteriores o simultáneos, ya sea verbal o escrito, entre usted y nosotros con respecto al Sitio.

Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier modificación de estos Términos entrará en vigencia inmediatamente después de su publicación en el Sitio. Usted acepta revisar periódicamente los Términos para estar al tanto de cualquier modificación. Su uso continuo del Sitio después de la publicación de cualquier modificación de estos Términos constituirá su aceptación de dichas modificaciones.

10. Aviso de privacidad

Nuestra Política de privacidad se aplica a su uso del Sitio. Puede encontrar nuestra Política de privacidad en el [enlace a la política de privacidad].

</p>
</div>
      </main> 
      <SiteFooter/>     
    </div>
  );
};

export default About;
