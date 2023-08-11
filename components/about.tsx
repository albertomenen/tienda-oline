import "@/styles/globals.css"
import React from 'react';
import Image from "next/image"
import { shimmer, toBase64 } from "@/lib/image"

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const About: React.FC = () => {
  return (
    <div className="about-div">         
      <main className="about-main">
        <h1 className=" about-h1">Acerca de FuckSapos</h1>
        {/* Agrega aquí el contenido de tus Términos y Condiciones */}
        <div>
        <Image
         priority
          src="/about-image.png"
          alt={`Perfume Image`}
         width={2176}
          height={544}
          quality={100}
         placeholder="blur"
         blurDataURL={`data: image/svg+xml; base64,${toBase64(shimmer(600,750))}`}
         className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
       />
        <p className="about-p"> Historia:

Erase una vez, dos fanáticos de los perfumes que se llamaban Juan y María. A Juan y María les encantaba usar perfume, pero siempre estaban decepcionados con los precios. Los perfumes que querían eran demasiado caros, y los perfumes que eran asequibles no parecían tan buenos.

Un día, Juan y María tuvieron una idea. Decidieron empezar su propia tienda de perfumes que vendería perfumes originales a precios mucho más bajos que los minoristas tradicionales.

Juan y María trabajaron duro para hacer realidad su sueño. Encontraron un proveedor de perfumes de alta calidad que estaba dispuesto a venderles sus productos a un precio reducido. También encontraron un espacio de oficina en Madrid, España, donde montaron su tienda.

La tienda de Juan y María fue un éxito instantáneo. Los clientes estaban encantados de poder encontrar perfumes originales a precios tan asequibles. Juan y María estaban muy felices de poder compartir su amor por los perfumes con otros y ganar dinero al mismo tiempo.

Un día, Juan y María estaban trabajando en la tienda cuando oyeron un ruido. Miraron hacia arriba y vieron a un sapo sentado en la ventana. El sapo era pequeño y verde, y tenía una gran sonrisa en su cara.

Juan y María se miraron y empezaron a reír. Nunca habían visto un sapo en su tienda antes.

El sapo los miró y croa. Juan y María lo miraron por un momento, y luego empezaron a reír de nuevo.

El sapo croa de nuevo, y Juan y María se dan cuenta de que el sapo está tratando de decir algo.

¿Qué quieres decir? le pregunta Juan al sapo.

El sapo croa de nuevo, y esta vez Juan y María pueden entender lo que está diciendo.

¡Perfume! dice el sapo.

Juan y María se miran con sorpresa. Nunca habían pensado que un sapo pudiera hablar, y mucho menos que pudiera hablar sobre perfumes.

¿Quieres un perfume? le pregunta Juan al sapo.

El sapo croa de nuevo, y esta vez asiente con la cabeza.

Juan y María se ríen y van a buscar un perfume para el sapo. Encuentran un perfume que huele a menta, y se lo dan al sapo.

El sapo olfatea el perfume y croa de felicidad. Se frota el perfume en la piel, y luego se va saltando de la ventana.

Juan y María se ríen y se dan la mano. Están encantados de haber podido ayudar al sapo a encontrar un perfume que le guste.

Y así, Juan y María continuaron vendiendo perfumes a precios asequibles, y el sapo continuó saltando de tienda en tienda, buscando el perfume perfecto.
</p>
</div>
      </main> 
      <SiteFooter/>     
    </div>
  );
};

export default About;
