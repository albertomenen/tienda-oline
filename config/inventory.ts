import { Image } from "sanity"

interface InventoryProduct {
  id: string;
  name: string;
  image?: string; 
  images: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  currency: string;
  description: string;
  sku: string;
  
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: '130db01b-57bd-4cf6-89f2-e5209ebbd3b1',
    name: 'SOLO LOEWE MERCURIO 100ML PARA EL ',
    categories: [ 'perfume', 'loewe', 'hombre', 'mercurio' ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-mercurio-100ml",
    price: 4999,
    description: 'Loewe Solo Mercurio de Loewe es una fragancia de la familia olfativa Aromática Fougère para Hombres. Esta fragrancia es nueva. Loewe Solo Mercurio se lanzó en 2020. Las Notas de Salida son hojas de higuera, geranio y lavanda; las Notas de Corazón son flor de azahar del naranjo y mandarina; las Notas de Fondo son regaliz, tabaco, cardamomo, miel, ámbar y almizcle.'
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: '55f1cb76-17e9-4153-bbbf-ee81fd95baf6',
    name: 'AIRE DE LOEWE PARA ELLA 100 ML ',
    categories: [ 'perfume', 'loewe', 'mujer', 'aire' ],
    images: [], 
    colors: [], 
    sku: "aire-de-loewe-para-ella-100-ml",
    price: 4499,
    description: 'La interpretación más chispeante y cítrica de la familia AIRE LOEWE. AIRE LOEWE FANTASÍA es un Eau de Toilette hespéride almizclado. Al igual que todas las fragancias de la familia AIRE LOEWE tiene una salida cítrica, un corazón floral con la icónica nota de jazmín y un fondo de almizcle. Para una mujer natural y optimista. Una mujer que crea sus propias reglas, segura de sí misma y satisfecha con su vida. Salida: Limón, Naranja, Mandarina, Pomelo Corazón: Jazmin , Flor de Almendro, Nerolí Fondo: Sándalo , Benjuí de Siam, Almizcle Marca: Loewe Modelo: Aire Loewe Fantasía Eau de Toilette' 
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: '55f1cb76-17e9-4153-bbbf-ee81fd95baf6',
    name: 'SOLO LOEWE CEDRO 100ML',
    categories: [ 'perfume', 'loewe', 'hombre', 'cedro' ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-cedro-100ml",
    price: 4999,
    description: "Solo Loewe Cedro de Loewe es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Esta fragrancia es nueva. Solo Loewe Cedro se lanzó en 2015. Las Notas de Salida son mandarina y pimienta rosa; las Notas de Corazón son lavanda y nuez moscada; las Notas de Fondo son cedro y benjuí."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: '59fd66d4-f9bc-4760-b94c-69d6ab8135c7',
    name: 'LOEWE POUR HOME Esencia EDT NUEVO FORMATO 100ML',
    categories: [ 'perfume', 'loewe', 'esencia' ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-esencia-100ml",
    price: 4999,
    description: "Esencia Loewe es una fragancia masculina, intensa y muy exclusiva, que otorga personalidad, carácter y distinción. TipoEsencia Loewe es una fragancia exclusiva y lujosa a la vez que extrovertida y seductora. Construida a partir de una combinación de más de 200 notas olfativas, es una fragancia intensa y varonil. NotasHesperide, afrutado, amaderado, ambarado. Notas de salida: Cítricas, ligeras, frescas. Notas de cuerpo: Especiadas, aromáticas, afrutadas. Notas de fondo: Amaderadas, ambaradas. UsosEsencia Loewe es una fragancia especialmente indicada para un hombre muy masculino, con fuerte carácter y personalidad. Puede utilizarse en cualquier momento del día o de la noche y cuenta con diferentes presentaciones y tamaños para satisfacer las necesidades de un hombre de hoy en día: tamaños cómodos para viaje o tamaños más económicos de utilización habitual. GéneroMasculino"
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: 'fd5367a6-283a-4005-80cc-664b5309d7b1',
    name: 'PERFUME LOEWE A MI AIRE 100 ML',
    categories: [ 'perfume', 'loewe', 'a mi aire', 'mujer' ],
    images: [], 
    colors: [], 
    sku: "perfume-loewe-a-mi-aire-100-ml",
    price: 4999,
    description: "Fecha de creaciónHistoria: Es una fragancia pensada para una mujer con una nueva atitud, llena de imaginación y rebeldía, está agusto consigo misma. Es una mujer libre, que vive su vida de manera muy personal. Descripción del perfume: Una actitud, un modo de ser y de estar, la personalidad de una mujer llena de imaginación , de rebeldía, que manifiesta desenfadadamente su libertad individual. En definitiva, una mujer que se siente a gusto consigo misma, que vive su vida de manera personal. Así nace un nuevo concepto de fragancia , una propuesta que acompaña a la mujer más actual, moderna , sensual, optimista, rabiosamente dinámica.Propone al universo femenino una fragancia joven, rebelde , fresca y siempre elegante y femenina , llena del color del optimismo.Cabeza: Bergamota de Italia, Mandarina, Trébol.Corazón: Tagete, Rosa Cantifolia, Hojas de Té de Jazmín, Pimiento rojo. Fondo: Musc, Musgo de Encina, Madera de Hinoki, Madera de Cedro."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: 'ccbcb670-90d6-4082-ab97-4124ad9b3fe5',
    name: 'AGUA DE LOEWE MAR DE CORAL 100 ML',
    categories: [ 'perfume', 'loewe', 'mar de coral', 'mujer' ],
    images: [], 
    colors: [], 
    sku: "agua-de-loewe-mar-de-coral-100-ml",
    price: 4999,
    description: "Agua de Loewe Mar de Coral de Loewe es una fragancia de la familia olfativa Floral Acuática para Hombres y Mujeres. Esta fragrancia es nueva. Agua de Loewe Mar de Coral se lanzó en 2015. Las Notas de Salida son toronja (pomelo), toronja (pomelo), limón (lima ácida), mandarina, yuzu, hojas de tomatera y menta; las Notas de Corazón son jazmín, lirio de los valles (muguete) y neroli; las Notas de Fondo son cedro, vainilla, ámbar y almizcle."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "8b82a8dd-1bcb-4a74-926c-8aab80d60feb",
    name: 'AGUA DE LOEWE 100 ML',
    categories: [ 'perfume', 'loewe', 'agua de loewe', 'mujer' ],
    images: [], 
    colors: [], 
    sku: "agua-de-loewe-100-ml",
    price: 4999,
    description: "Agua de Loewe es una fragancia universal, para hombre y mujer. Es innovadora, fresca y natural, cristalina y persistente y puede utilizarse en cualquier momento del día. El diseño de esta fragancia tiene un carácter universal, pensado para hombre y mujer, por lo que combina formas suaves y femeninas con rasgos contundentes y sobrios, más propios del mundo masculino."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "60c004c9-9635-44bf-893b-982035695b33",
    name: 'SOLO LOEWE ATLAS 100 ML PARA EL',
    categories: [ 'perfume', 'loewe', 'atlas', 'hombre' ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-atlas-100-ml-para-el",
    price: 5499,
    description: "Loewe Solo es una familia de fragancias inspiradas en la puesta de sol: un estado de armonía y equilibrio entre el día y la noche. Fragancias balanceadas. Agua y tierra, mar y desierto, Loewe Solo Atlas es una fragancia masculina de contrastes cálidos y frescos. Diseñada a base de acordes contrapuestos perfectamente equilibrados, destacan el lentisco de Marruecos, la flor de azahar de Egipto, el vetiver de Haití o la nota marina de sal. Loewe Solo Atlas aparece encapsulado en un frasco con forma de bloque y de color caldera."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "82d50b7c-3dcb-4d05-a3f8-d6dd80f6beae",
    name: 'AGUA DE LOEWE MIAMI 100 ML PARA ELLA',
    categories: [ 'perfume', 'loewe', 'miami', 'mujer', "ella" ],
    images: [], 
    colors: [], 
    sku: "agua-de-loewe-miami-100-ml-para-ella",
    price: 4499,
    description: "LOEWE Agua Miami es un Eau de Toilette hespéride acuático, perfecto tanto para hombres como para mujeres. Al igual que todas las fragancias de la familia LOEWE Agua tiene una marcada salida cítrica, un corazón floral y un fondo de almizcle. La interpretación del espíritu de Miami, su distrito Art deco que llena de luz y color los días con geometría elemental, abundancia de lo ornamental. El sol, la playa y la arena, todo lo que gira entorno al agua. Miami, de día y de noche."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "d4c021cd-272b-48d1-8ef6-2c40460c8bd1",
    name: 'LOEWE AIRE SUTILEZA ( NUEV0 MODELO) 100 ML',
    categories: [ 'perfume', 'loewe', 'aire sutileza', 'aire', "ella" ],
    images: [], 
    colors: [], 
    sku: "loewe-aire-sutileza-nuev0-modelo-100-ml",
    price: 5499,
    description: "Aire Sutileza de Loewe es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Esta fragrancia es nueva. Aire Sutileza se lanzó en 2017. Las Notas de Salida son mandarina de Calabria, grosella roja y pera; las Notas de Corazón son lirio de los valles (muguete), magnolia y jazmín egipcio; las Notas de Fondo son vetiver de Haití, sándalo y almizcle."
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "b074229f-2d17-4234-8177-400fec282107",
    name: 'ESENCIA LOEWE EAU DE PARFUM PARA HOMBRE 100 ML',
    categories: [ 'perfume', 'loewe', 'esencia', 'eau', "el" ],
    images: [], 
    colors: [], 
    sku: "esencia-loewe-eau-de-parfum-para-hombre-100-ml",
    price: 5999,
    description: "Esencia Loewe es una fragancia masculina, intensa y muy exclusiva, que otorga personalidad, carácter y distinción. TipoEsencia Loewe es una fragancia exclusiva y lujosa a la vez que extrovertida y seductora. Construida a partir de una combinación de más de 200 notas olfativas, es una fragancia intensa y varonil. NotasHesperide, afrutado, amaderado, ambarado. Notas de salida: Cítricas, ligeras, frescas. Notas de cuerpo: Especiadas, aromáticas, afrutadas. Notas de fondo: Amaderadas, ambaradas. UsosEsencia Loewe es una fragancia especialmente indicada para un hombre muy masculino, con fuerte carácter y personalidad. Puede utilizarse en cualquier momento del día o de la noche y cuenta con diferentes presentaciones y tamaños para satisfacer las necesidades de un hombre de hoy en día: tamaños cómodos para viaje o tamaños más económicos de utilización habitual. GéneroMasculino"
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "55f1cb76-17e9-4153-bbbf-ee81fd95baf6",
    name: 'AIRE DE LOEWE PARA ELLA 100 ML',
    categories: [ 'perfume', 'loewe', 'aire', 'eau', "el" ],
    images: [], 
    colors: [], 
    sku: "aire-de-loewe-para-ella-100-ml",
    price: 5999,
    description: "La interpretación más chispeante y cítrica de la familia AIRE LOEWE. AIRE LOEWE FANTASÍA es un Eau de Toilette hespéride almizclado. Al igual que todas las fragancias de la familia AIRE LOEWE tiene una salida cítrica, un corazón floral con la icónica nota de jazmín y un fondo de almizcle. Para una mujer natural y optimista. Una mujer que crea sus propias reglas, segura de sí misma y satisfecha con su vida. Salida: Limón, Naranja, Mandarina, Pomelo Corazón: Jazmin , Flor de Almendro, Nerolí Fondo: Sándalo , Benjuí de Siam, Almizcle Marca: Loewe Modelo: Aire Loewe Fantasía Eau de Toilette" 
  },
  {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "d3f11cd2-6e27-47d6-96cb-f0ea7abbee05",
    name: 'SOLO LOEWE ( NUEVO FORMATO) PARA EL 100 ML',
    categories: [ 'perfume', 'loewe', 'solo', 'nuevo formato', "el" ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-nuevo-formato-para-el-100-ml",
    price: 5999,
    description: "Fecha de creación 2005.Madera - Especiado.Un perfume de armonía y de contrastes para el hombre.Historia: La casa española de lujo Loewe lanza nuevo masculino rítmico de contrastes: sutileza y fuerza, frescura y calor … Un perfume de elegancia, y de carácter para un hombre a las facetas múltiples. El diseño del frasco de Solo también evoca armonía y contraste.Descripción del perfume: Arbolado picante (canela, pimienta rosa y nuez moscada) vestido de notas ambar y claveteado por toques afrutados.Cabeza: Bergamota, Limón, Mandarina.Corazón: Nuez moscada, Pimienta Rosada, Canela, Lavanda.Fondo: Ámbar, Notas Arboladas, Almizcle.Frasco: Un frasco al diseño sutil, aliando la fuerza del metal a la fragilidad del vaso."
  },
  {
    currency: 'EUR',
    sizes: [ '50ML' ],
    id: "de119462-a85f-4cd5-99cb-06403f370f94",
    name: 'EAU DE TOILETTE PAULA´S IBIZA 50 ML LOEWE',
    categories: [ 'perfume', 'loewe', 'paula ibiza', '50 ml', "ella" ],
    images: [], 
    colors: [], 
    sku: "eau-de-toilette-paula-s-ibiza-50-ml-loewe",
    price: 3999,
    description: "Loewe Paula´s Ibiza es una composición espontánea y despreocupada, escapismo embotellado. Una fragancia desenfadada capturada en un frasco cilíndrico en los tonos de un arcoíris degradado y un tapón azul celeste, enfundados en una caja que muestra uno de los icónicos estampados de los fundadores de la boutique Paula´s, Armin Heinemann y Stuart Rudnick, sirenas nadando entre corales rojos, algas y caballitos de mar. Notas olfativas de LOEWE Paula s Ibiza Eau de Toilette: Aceite de gálbano. Aceite de mandarina. Agua de coco. Madera reflotada. Lirio de montaña. Flor de Frangipani. Ambar gris. Absoluto de Vainilla de Madagascar. Pachuli de Sulawesi."
   },

   {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    name: 'LOEWE EARTH UNISEX EDP 100 ML',
    categories: [ 'perfume', 'loewe', 'earth', '100 ml', "unisex" ],
    images: [], 
    colors: [], 
    sku: "loewe-earth-unisex-edp-100-ml",
    price: 6499,
    description: "LOEWE Earth Eau de Parfum se une al arcoíris botánico de Loewe. La primera fragancia de una nueva familia que unifica este caleidoscopio de color con su vibrante frasco en un tono malva. Loewe Earth está inspirada en los elementos que conectan la naturaleza y dan paso a la vida tanto por debajo como por encima de la tierra, desde lo atmosférico hasta lo tangible, lo visible y lo invisible, unificando el mundo interior y exterior. Floral, ambarina y almizclada, Loewe Earth refleja esta conectividad a través de notas de trufa – un maravilloso ingrediente que nace bajo tierra - pera, elemí, mimosa y violeta. Loewe Earth se presenta en un frasco de vidrio translúcido en un brillante tono malva. Acordes Olfativos: Mimosa, Violeta, Ámbar gris, Almizcle, Elemi, Trufa, Pera."
   },
   {
    currency: 'EUR',
    sizes: [ '100ML' ],
    id: "9e47074f-b19b-4ddd-a7fc-c7634f800bb8",
    name: 'Solo Loewe Ella 100 ML',
    categories: [ 'perfume', 'loewe', 'solo', '100 ml', "ella" ],
    images: [], 
    colors: [], 
    sku: "solo-loewe-ella-100-ml",
    price: 4499,
    description: "Solo Loewe Ella Eau de Toilette de Loewe es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Esta fragrancia es nueva. Solo Loewe Ella Eau de Toilette se lanzó en 2020. La Nariz detrás de esta fragrancia es Núria Cruelles Borrull. Las Notas de Salida son maracuyá (fruta de la pasión) y pitahaya; las Notas de Corazón son peonía rosa y algodón de azúcar; las Notas de Fondo son sándalo, vainilla, ámbar y praliné."
  },

]
