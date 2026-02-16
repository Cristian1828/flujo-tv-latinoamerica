# IMAGE-PROMPTS.md — Flujo TV Latinoamérica

Guía profesional de assets visuales para la landing page. Cada prompt sigue la estructura:
**[Sujeto] + [Composición] + [Iluminación] + [Paleta] + [Estilo/Cámara] + [Mood] + [Negativo]**

Todas las imágenes se convertirán a **.webp** antes de subir al proyecto.

**Carpeta destino imágenes:** `/public/images/`
**Carpeta destino video:** `/public/videos/`

---

## 0. VIDEO DE FONDO — Hero (1 video + 1 poster)

### Video: `hero-bg.mp4` / `hero-bg.webm`

> **Propósito:** Video loop de fondo para el Hero de la landing. Se reproduce en autoplay, sin sonido, en loop infinito. Va detrás de texto blanco y un overlay oscuro, así que necesita ser visualmente atractivo pero no distractivo.
>
> **Especificaciones técnicas:**
> - Duración: 12-20 segundos (loop seamless)
> - Resolución: 1920×1080 mínimo (landscape)
> - FPS: 24-30
> - Sin audio
> - Peso target: <5MB (MP4 H.264), <3MB (WebM VP9)
> - Bitrate sugerido: 2-4 Mbps
>
> **Prompt para generar o buscar:**
> Secuencia cinematográfica en cámara lenta de una familia latina en una sala de estar moderna y acogedora durante la noche. La TV grande al fondo emite luz azulada cambiante sobre las paredes. Transiciones suaves entre: (1) la luz del televisor reflejándose en una pared oscura, (2) mano tomando un control remoto de una mesa, (3) pantalla de TV mostrando contenido vibrante de deportes/películas con colores que cambian. Movimiento sutil de cámara tipo dolly lento o parallax. Profundidad de campo reducida (f/1.8-f/2.8). Tonos predominantes: azules fríos de la pantalla contra naranjas cálidos del ambiente. Color grading cinematográfico con sombras profundas estilo teal-and-orange. Estilo tipo comercial de Netflix o Apple TV+.
>
> **Alternativa stock:** Buscar en Pexels/Pixabay: "family watching TV dark room cinematic slow motion" o "streaming service living room night ambiance".
>
> **Negativo:** Sin texto sobreimpreso, sin logos visibles de marcas reales, sin rostros muy definidos (ya que está detrás de overlay). Evitar movimientos de cámara bruscos o cambios de escena abruptos que rompan el loop.

### Poster: `hero-poster.webp`

| Archivo | Dimensiones | Formato final |
|---------|-------------|---------------|
| `hero-poster.webp` | 1920×1080 | WebP, calidad 80 |

> **Propósito:** Frame estático que se muestra mientras el video carga, especialmente en móviles con conexión lenta. Debe verse bien por sí solo como imagen hero estática.
>
> **Prompt:**
> Fotografía editorial de una sala de estar moderna y oscura en la noche. Una TV grande montada en la pared emite una luz tenue azul-violeta que ilumina suavemente el sofá y la pared circundante. El ambiente es premium y acogedor: muebles oscuros, iluminación tenue indirecta (LED strips), cojines en tonos neutros terrosos. La composición es amplia (wide shot) con la TV como punto focal a la derecha y espacio negativo abundante en el lado izquierdo para que el texto del Hero quede legible. Profundidad de campo media. Color grading: sombras very dark (#0A0A0A), highlights azules fríos con toques de ámbar desde una lámpara lateral. Estilo: fotografía de interiores para revista de arquitectura + mood de comercial de streaming premium. Cámara: 24mm f/2.8, trípode, exposición 1/30.
>
> **Negativo:** Sin personas visibles. Sin contenido identificable en la pantalla del TV. Sin logotipos reales. Sin colores saturados excesivos.

---

## 1. Logo

| Archivo | Notas |
|---------|-------|
| `logo_flujo.webp` | Logo oficial de Flujo TV. Copiar del proyecto base existente. |

---

## 2. Beneficios (6 imágenes)

Todas las imágenes de esta sección sirven como cabecera visual de cada tarjeta de beneficio. Aparecen recortadas con aspect ratio ~2:1 y un overlay gradiente oscuro en el bottom. Deben ser visualmente ricas pero no desbordar el contenido del texto debajo.

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `benefit-4k.webp` | 800×400 | WebP, calidad 82 |
| 2 | `benefit-speed.webp` | 800×400 | WebP, calidad 82 |
| 3 | `benefit-channels.webp` | 800×400 | WebP, calidad 82 |
| 4 | `benefit-screens.webp` | 800×400 | WebP, calidad 82 |
| 5 | `benefit-support.webp` | 800×400 | WebP, calidad 82 |
| 6 | `benefit-freedom.webp` | 800×400 | WebP, calidad 82 |

### 2.1 — `benefit-4k.webp` — Calidad 4K Real

> **Propósito:** Transmitir la nitidez y calidad visual premium del servicio. El usuario debe sentir que el contenido se ve increíble.
>
> **Prompt:**
> Close-up macro de una pantalla de televisor OLED mostrando un paisaje natural ultra-nítido: una cascada cristalina cayendo sobre rocas musgosas en un bosque tropical, cada gota de agua perfectamente definida. Se aprecian los subpíxeles RGB del panel a nivel macro en los bordes del frame para comunicar la resolución extrema. La pantalla ocupa el 90% del encuadre, ligeramente angulada (15° tilt). Fondo de sala oscura out of focus detrás del TV. Iluminación: la luz del contenido en pantalla ilumina sutilmente el bisel del televisor. Reflejos mínimos en el panel. Color grading: verdes profundos saturados del bosque, azules cristalinos del agua, contraste alto. Estilo: fotografía de producto de TV para campaña de Samsung/LG/Sony. Cámara: 85mm macro, f/4, ISO 200.
>
> **Negativo:** Sin marcas de TV visibles. Sin logos en pantalla. Sin personas. Sin reflection de fotógrafo en la pantalla.

### 2.2 — `benefit-speed.webp` — Cero Buffering

> **Propósito:** Representar velocidad, conectividad y transmisión sin interrupciones de forma abstracta y tecnológica.
>
> **Prompt:**
> Composición abstracta tecnológica de fibras ópticas en movimiento: cientos de filamentos de luz viajando a alta velocidad de izquierda a derecha a través del encuadre, formando trayectorias curvas elegantes. Los filamentos son predominantemente de color rose (#E11D48) y ámbar (#F59E0B) con algunos en blanco puro. Fondo completamente negro (#080808) para máximo contraste. Efecto de motion blur largo en las fibras para comunicar velocidad. Algunas partículas luminosas dispersas como puntos de datos viajando. La composición tiene más densidad de fibras en el centro-izquierda y se dispersa hacia la derecha. Estilo: render 3D hiperrealista tipo data visualization artwork. Iluminación: puramente emisiva desde las fibras, sin iluminación externa.
>
> **Negativo:** Sin texto. Sin iconos. Sin elementos UI. Sin formas geométricas duras. Sin azules (para diferenciarlo del branding estándar tech).

### 2.3 — `benefit-channels.webp` — +3,000 Canales

> **Propósito:** Representar visualmente la abundancia y variedad de contenido disponible. El usuario debe sentir que hay muchísimo para ver.
>
> **Prompt:**
> Video wall profesional compuesto por una cuadrícula de 5×4 pantallas de TV mostrando diferentes tipos de contenido simultáneamente: un partido de fútbol, un noticiero con presentadora latina, un concierto musical, dibujos animados infantiles coloridos, un programa de cocina, una telenovela, un documental de naturaleza, un canal de deportes extremos, un programa de variedades y más. Cada pantalla tiene contenido distinto y colorido. La cuadrícula se ve ligeramente en perspectiva (angulada 15° desde abajo), como si el espectador estuviera parado frente a ella. Marcos delgados negros entre pantallas. Ambiente de control room o showroom oscuro. La luz proviene exclusivamente de las pantallas y se refleja suavemente en el piso. Estilo: fotografía editorial para revista de tecnología. Cámara: 35mm, f/5.6.
>
> **Negativo:** Sin logos de cadenas reales (CNN, ESPN, etc.). Sin texto legible en pantallas. Sin personas frente al video wall.

### 2.4 — `benefit-screens.webp` — 3 Pantallas Simultáneas

> **Propósito:** Mostrar el uso simultaneo multi-dispositivo en un contexto familiar real de Latinoamérica. Transmitir que toda la familia puede ver contenido diferente al mismo tiempo.
>
> **Prompt:**
> Escena lifestyle cenital (overhead/bird's eye, 45°) de una mesa de centro de sala de estar con 3 dispositivos activos mostrando contenido diferente: (1) un smartphone Android moderno con una serie en pantalla, (2) una tablet Android horizontal con un partido de fútbol, (3) al fondo, un televisor grande con una película de acción. Alrededor de los dispositivos: un tazón de palomitas, una taza de café, un control remoto negro. La mesa es de madera oscura. Iluminación cálida hogareña tipo golden hour entrando por una ventana lateral. Las pantallas emiten luz propia contrastando con la calidez del ambiente. Profundidad de campo selectiva: smartphone en foco nítido, tablet en foco medio, TV suavemente desenfocada. Estilo: editorial lifestyle para revista de tecnología/hogar. Cámara: 35mm, f/2.8, ángulo 45° cenital.
>
> **Negativo:** Sin marcas visibles en los dispositivos. Sin contenido reconocible (películas reales) en pantallas. Sin rostros de personas.

### 2.5 — `benefit-support.webp` — Soporte 24/7

> **Propósito:** Transmitir que el soporte es real, humano, rápido y accesible vía WhatsApp. El usuario debe sentir confianza de que será ayudado.
>
> **Prompt:**
> Primer plano de manos de persona latina sosteniendo un smartphone moderno con la pantalla encendida mostrando una conversación de chat activa (estilo interfaz de mensajería, burbujas verdes y blancas con texto genérico borroso). El pulgar está sobre el teclado virtual como si estuviera escribiendo una respuesta. Fondo: escritorio de trabajo desenfocado con un monitor encendido y una planta suculenta. Iluminación: natural suave desde una ventana a la izquierda (luz difusa de día nublado). La pantalla del celular tiene un brillo cálido. Tonos generales: cálidos, piel natural, fondo en tonos neutros topo/gris. Estilo: fotografía lifestyle de producto para campaña de WhatsApp Business. Cámara: 50mm, f/2.0, enfoque en las manos y pantalla.
>
> **Negativo:** Sin logo de WhatsApp visible. Sin texto legible en la pantalla. Sin rostro visible. Sin marcas del teléfono visibles.

### 2.6 — `benefit-freedom.webp` — Sin Contratos

> **Propósito:** Comunicar libertad, relajación y ausencia de compromisos. El usuario debe sentir que esto es fácil y sin presión.
>
> **Prompt:**
> Persona joven latina (25-35 años) recostada cómodamente en una hamaca tejida de algodón en un balcón o terraza con vista a una ciudad latinoamericana al atardecer. En una mano sostiene relajadamente un control remoto apuntando hacia adentro (hacia un TV no visible). Expresión de total relajación y sonrisa sutil. Viste ropa casual (camiseta, pantalón cómodo). Detrás: el cielo con colores de golden hour (naranjas, rosas, violetas). En primer plano difuso: una planta tropical o baranda del balcón. Iluminación: contraluz de atardecer creando rim light dorado en el cabello y los bordes del cuerpo. Fill light natural suave en el rostro. Estilo: fotografía editorial lifestyle para campaña de telecomunicaciones latinoamericana. Cámara: 85mm, f/2.0, enfoque en rostro.
>
> **Negativo:** Sin logos. Sin pantallas visibles. Sin texto sobreimpreso. Sin look de stock photography genérico (evitar sonrisa exagerada tipo comercial).

---

## 3. Catálogo (4 imágenes)

Estas imágenes funcionan como fondos de tarjetas con overlay gradiente oscuro pesado depuis bottom. El texto se superpone encima, así que las imágenes deben tener su contenido interesante en la zona center-top.

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `cat-movies.webp` | 800×560 | WebP, calidad 80 |
| 2 | `cat-series.webp` | 800×560 | WebP, calidad 80 |
| 3 | `cat-sports.webp` | 800×560 | WebP, calidad 80 |
| 4 | `cat-live.webp` | 800×560 | WebP, calidad 80 |

### 3.1 — `cat-movies.webp` — Películas

> **Propósito:** Representar la magnitud y variedad del catálogo de películas. El usuario debe sentir que tiene un cine entero en su app.
>
> **Prompt:**
> Pasillo interior de una sala de cine premium con butacas vacías de cuero rojo/borgoña vistas desde el fondo hacia la pantalla gigante. La pantalla de cine está encendida emitiendo una luz intensa que ilumina la sala en tonos azules-violeta. Filas de asientos ascendentes hacia la cámara. Luces LED tenues de pasillo en los laterales en tono ámbar. Ambiente oscuro cinematográfico. El techo tiene iluminación indirecta sutil. La pantalla muestra un contenido abstracto luminoso (no identificable). Composición: punto de fuga central, simétrica, líneas convergentes hacia la pantalla. Estilo: fotografía arquitectónica de interiores de cine para revista de diseño. Cámara: 16mm ultra wide, f/4, exposición larga para captar las luces LED.
>
> **Negativo:** Sin personas. Sin títulos de películas visibles. Sin marcas de cadenas de cine. Sin palomitas ni comida.

### 3.2 — `cat-series.webp` — Series

> **Propósito:** Evocar el binge-watching y la experiencia inmersiva de ver series completas. Ambiente nocturno acogedor de "maratón de series".
>
> **Prompt:**
> Escena acogedora nocturna: sofá de tela gris oscuro con una cobija gruesa arrugada, un tazón de palomitas a medio comer y un control remoto sobre el asiento. Al fondo desenfocado, un televisor grande muestra una escena dramática genérica con iluminación cálida (tonos naranjas-ámbar). La sala está en penumbra, iluminada únicamente por la luz del televisor que proyecta sombras suaves sobre el sofá y los objetos. Una lámpara de mesa apagada al costado. Sensación de intimidad y "noche de series en casa". Composición: ligero ángulo bajo (desde la perspectiva del sofá), profundidad de campo reducida con el sofá en primer plano nítido y el TV desenfocado. Estilo: fotografía editorial estilo hygge/comfort. Cámara: 35mm, f/1.8, ISO 800.
>
> **Negativo:** Sin personas. Sin contenido reconocible en TV. Sin luz dura. Sin ambiente diurno.

### 3.3 — `cat-sports.webp` — Deportes en Vivo

> **Propósito:** Capturar la emoción y la energía de ver deportes en vivo. El usuario debe sentir la adrenalina del partido.
>
> **Prompt:**
> Estadio de fútbol lleno durante un partido nocturno, vista panorámica desde tribuna alta. El campo verde brillante bajo los reflectores potentes contrasta con el público en las gradas que forma un mosaico de colores. Humo o vapor visible en el aire iluminado por los reflectores. Los jugadores son siluetas pequeñas en el campo. Las luces del estadio crean star bursts (efecto de estrella). En la zona superior de la tribuna opuesta, pantallas LED del estadio muestran el marcador (borroso, no legible). Sensación de evento masivo, energía colectiva. Colores: verde del campo, blancos de los reflectores, variados en las gradas. Ambiente: nocturno con cielo negro-azul. Estilo: fotografía deportiva editorial para The Players Tribune o ESPN Magazine. Cámara: 24mm, f/8, exposición media para captar luces y detalles.
>
> **Negativo:** Sin logos de equipos reales. Sin marcas publicitarias legibles en el estadio. Sin close-ups de jugadores reconocibles.

### 3.4 — `cat-live.webp` — TV en Vivo

> **Propósito:** Comunicar la variedad de canales en vivo y la sensación de "televisión ilimitada" con programación diversa.
>
> **Prompt:**
> Composición tipo grid/mosaico de 6-8 pantallas de TV flotantes en un espacio vacío negro, cada una mostrando un tipo de contenido diferente: un noticiero con infografías, un programa de entretenimiento con escenario colorido, un canal de música con videoclip, un canal infantil de animación, un canal de cocina con chef, un documental de naturaleza. Las pantallas están dispuestas de forma asimétrica a diferentes ángulos y profundidades, como si flotaran en el espacio. Cada pantalla emite su propia luz que se mezcla con la de las adyacentes. El fondo es negro gradiente a dark navy (#0E0E0E a #161616). Pequeñas partículas de luz flotando entre las pantallas. Estilo: render 3D conceptual futurista para presentación de producto tech. Sin bordes gruesos en los monitores, aspecto minimalista y moderno.
>
> **Negativo:** Sin marcas de canales reales. Sin texto legible en pantallas. Sin cables ni conexiones visibles. Sin aspecto retro/vintage.

---

## 4. Cómo Funciona — 3 Pasos (3 imágenes)

Imágenes de cabecera para las tarjetas de los 3 pasos del proceso de compra e instalación. Aspect ratio ~16:9. Overlay gradiente oscuro en la base con un número grande translúcido.

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `step-plan.webp` | 800×450 | WebP, calidad 82 |
| 2 | `step-install.webp` | 800×450 | WebP, calidad 82 |
| 3 | `step-enjoy.webp` | 800×450 | WebP, calidad 82 |

### 4.1 — `step-plan.webp` — Elige tu plan

> **Propósito:** Representar el primer paso: el momento en que el usuario elige y decide su plan. Sensación de facilidad y decisión rápida.
>
> **Prompt:**
> Joven latino (20-30 años) sentado en un café moderno y luminoso, sonríe sutilmente mientras mira la pantalla de su smartphone que sostiene con ambas manos. La pantalla del celular muestra una interfaz de selección con tarjetas de precios (borrosa, no legible). Sobre la mesa: una taza de café latte con espuma, un par de AirPods. La luz natural entra desde un ventanal a la izquierda creando iluminación suave direccional. El fondo del café está desenfocado con bokeh cálido de luces y otros clientes borrosos. Expresión del joven: relajada, segura, como quien toma una decisión fácil. Paleta: tonos cálidos café/crema del ambiente con la luz fría azulada de la pantalla del celular. Estilo: fotografía lifestyle editorial para campaña de fintech/app. Cámara: 85mm, f/1.8, enfoque en rostro y manos.
>
> **Negativo:** Sin marca visible del celular. Sin texto legible en pantalla. Sin expresión exagerada. Sin look de stock genérico.

### 4.2 — `step-install.webp` — Instala la app

> **Propósito:** Mostrar el momento técnico de la instalación de forma simple y no intimidante. El usuario debe sentir que es facilísimo.
>
> **Prompt:**
> Close-up de manos conectando un Amazon Fire Stick (o dispositivo streaming similar negro pequeño) al puerto HDMI lateral de un televisor grande. Se ve claramente el dispositivo entrando en el puerto HDMI, el cable USB de alimentación y una pequeña porción de la parte trasera/lateral del TV. Al fondo, ligeramente desenfocada, la pantalla frontal del TV muestra el splash screen de bienvenida con un fondo azul oscuro y un ícono de configuración. La iluminación es mixta: luz ambiente de la habitación (cálida) + luz de la pantalla del TV (fría azulada). Composición tight: las manos y el dispositivo ocupan el 70% del frame. Estilo: fotografía tutorial/How-to tipo manual de usuario premium o review de tech en MKBHD. Cámara: 50mm, f/2.8, enfoque en las manos y el dispositivo.
>
> **Negativo:** Sin logo de Amazon visible. Sin rostro. Sin desorden en el fondo. Sin cables enredados (debe verse limpio y simple).

### 4.3 — `step-enjoy.webp` — Disfruta

> **Propósito:** Transmitir el resultado final: la familia feliz disfrutando. Es la recompensa emocional del proceso. Genera deseo de vivir esa experiencia.
>
> **Prompt:**
> Familia latina (pareja joven ~30 años con un hijo ~8 años) sentados juntos en un sofá amplio y moderno, arropados con una cobija suave. Están viendo la TV (no visible en frame, su luz les ilumina los rostros). Expresiones genuinas de entretenimiento: el niño señala la pantalla emocionado, la madre sonríe mirando la TV, el padre tiene un brazo alrededor de su familia con un tazón de palomitas en la otra mano. La sala está en penumbra con iluminación cálida indirecta (LED strip tras el sofá en tono ámbar tenue). La luz principal es la del TV que crea un fill light frío-azulado en los rostros, mezclado con la calidez del ambiente. Composición: medium shot ligeramente angulado, la familia centrada. Estilo: fotografía editorial para campaña de telecomunicaciones en LATAM (Claro, Movistar tier). Cámara: 50mm, f/2.0, ISO 400.
>
> **Negativo:** Sin TV visible en el encuadre. Sin logos en ropa. Sin expresiones falsas tipo stock photography. Sin iluminación plana o de flash.

---

## 5. Descarga — Dispositivos (1 imagen)

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `download-devices.webp` | 800×600 | WebP, calidad 82 |

### 5.1 — `download-devices.webp`

> **Propósito:** Mostrar de forma aspiracional todos los dispositivos compatibles organizados como producto premium. El usuario debe querer tener esos gadgets.
>
> **Prompt:**
> Flat lay product photography sobre superficie de pizarra negra mate: distribución elegante de 5 dispositivos Android organizados simétricamente: (centro) smartphone moderno grande con pantalla encendida mostrando interfaz de streaming, (arriba-izquierda) tablet Android blanca mostrando un partido de fútbol, (arriba-derecha) Amazon Fire Stick con su control remoto, (abajo-izquierda) TV Box Android negro compacto, (abajo-derecha) Xiaomi Mi Stick con cable. Entre los dispositivos: cables USB-C dispuestos artísticamente, un control remoto de TV. Todos los dispositivos tienen pantallas encendidas emitiendo luz que se refleja sutilmente en la pizarra. Iluminación de estudio: softbox cenital principal + rim lights laterales rasantes para resaltar los bordes de los dispositivos. Sombras suaves y definidas. Estilo: fotografía de producto para Apple keynote o Android product page. Cámara: 50mm, f/8, cenital 90°, ISO 100, trípode.
>
> **Negativo:** Sin marcas de fabricante visibles (logos Apple, Samsung, etc.). Sin polvo ni huellas en pantallas. Sin cables desordenados. Sin fondo con textura excesiva.

---

## 6. Testimoniales — Fotos de Clientes (4 retratos)

Fotos de clientes que acompañan las citas de testimonios. Deben verse auténticos y creíbles, como fotos reales de usuarios, NO como stock photography genérica. Aspecto ratio ligeramente vertical con espacio para overlay gradiente en la base.

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `client-01.webp` | 400×500 | WebP, calidad 80 |
| 2 | `client-02.webp` | 400×500 | WebP, calidad 80 |
| 3 | `client-03.webp` | 400×500 | WebP, calidad 80 |
| 4 | `client-04.webp` | 400×500 | WebP, calidad 80 |

### 6.1 — `client-01.webp` — Carlos M. (Bogotá)

> **Propósito:** Retrato creíble de un usuario satisfecho colombiano. Va junto al texto: "Llevo 4 meses con Flujo TV y no he tenido un solo corte."
>
> **Prompt:**
> Retrato espontáneo de hombre colombiano de 30-38 años, tez morena cálida, cabello negro corto, barba de 3 días. Viste camisa polo azul oscuro. Sonrisa natural y relajada (no posada, como si le hubieran tomado la foto en medio de una conversación). Fondo: pared de ladrillo expuesto desenfocada tipo apartamento de Bogotá. Iluminación: luz natural lateral desde una ventana, creando sombras suaves en un lado del rostro (ratio 2:1 Rembrandt). Encuadre: head & shoulders, ligeramente descentrado hacia la izquierda con espacio negativo a la derecha. Color grading: tonos cálidos naturales, sin filtros fuertes, piel realista. Estilo: retrato editorial tipo LinkedIn profesional o perfil de app latinoamericana. Cámara: 85mm, f/2.0, ISO 200.
>
> **Negativo:** Sin fondo blanco de estudio. Sin pose rígida de foto carnet. Sin sonrisa exagerada. Sin filtros tipo Instagram. Sin accesorios llamativos.

### 6.2 — `client-02.webp` — María S. (Lima)

> **Propósito:** Retrato creíble de una usuaria satisfecha peruana. Va junto al texto: "Lo que más me gusta es que el soporte responde al toque."
>
> **Prompt:**
> Retrato espontáneo de mujer peruana de 26-33 años, tez mestiza, cabello negro liso largo suelto, maquillaje natural mínimo. Viste blusa de algodón blanca simple con cuello redondo. Expresión amigable genuina, ojos ligeramente entrecerrados como si el sol le diera en la cara, sonrisa contenida amable. Fondo: vegetación desenfocada tipo parque de Lima (hojas verdes borrosas con puntos de sol filtrado). Iluminación: natural exterior en golden hour temprano, luz suave con toques dorados en el cabello (rim light). Encuadre: three-quarter portrait, mirada directa a cámara. Color grading: tonos vivos naturales con warmth en las sombras. Estilo: retrato lifestyle tipo Humans of New York o perfil de usuario real. Cámara: 85mm, f/1.8, ISO 200.
>
> **Negativo:** Sin maquillaje editorial pesado. Sin look de modelo. Sin fondo de estudio. Sin ropa de marca visible. Sin filtros.

### 6.3 — `client-03.webp` — Diego R. (Santiago)

> **Propósito:** Retrato creíble de un usuario satisfecho chileno. Va junto al texto: "El plan de 6 meses fue la mejor decisión. La calidad de imagen es brutal."
>
> **Prompt:**
> Retrato de hombre chileno de 35-44 años, tez clara-mestiza, barba recortada bien cuidada, cabello castaño oscuro con entradas leves. Viste chaqueta sport gris oscuro sobre camiseta negra. Expresión seria-confiada con media sonrisa, mirada directa. Fondo: vidrio desenfocado de una oficina moderna o café con reflejos urbanos. Iluminación: mixta natural+artificial, luz principal frontal difusa con rim light frío desde atrás (azulado de ventana). Encuadre: head & shoulders, rostro centrado, ligeramente mirando hacia arriba. Color grading: tonos desaturados fríos tipo editorial masculina, sombras blueish. Estilo: portrait tipo perfil de CEO o emprendedor tech en revista Pulso o Forbes LATAM. Cámara: 105mm, f/2.0, ISO 160.
>
> **Negativo:** Sin look de modelo. Sin pose artificial. Sin fondo completamente blanco. Sin barba descuidada (debe verse profesional). Sin iluminación plana.

### 6.4 — `client-04.webp` — Ana G. (Ciudad de México)

> **Propósito:** Retrato creíble de una usuaria satisfecha mexicana. Va junto al texto: "Ahora veo todo lo que quiero desde mi celular o en la tele con el TV Box."
>
> **Prompt:**
> Retrato espontáneo de mujer mexicana de 30-40 años, tez morena, cabello oscuro ondulado a la altura de los hombros, aretes pequeños discretos (aros dorados). Viste suéter tejido color terracota/óxido. Sonrisa amplia y genuina mostrando dientes, ojos expresivos. Fondo: sala de estar moderna desenfocada con colores cálidos neutros (beige, madera). Iluminación: golden hour entrando por ventana lateral derecha, creando un baño de luz cálida dorada en todo el rostro. Fill natural del lado sombra. Encuadre: bust portrait, ligeramente inclinada hacia la cámara como en conversación. Color grading: tonos cálidos saturados tipo golden hour mexicana, highlights ámbar. Estilo: portrait tipo campaña publicitaria de Telcel o Coppel, auténtica pero cuidada. Cámara: 85mm, f/1.8, ISO 200.
>
> **Negativo:** Sin exceso de maquillaje. Sin pose de modelo de moda. Sin fondo blanco/gris de estudio. Sin accesorios lujosos. Sin filtro beauty.

---

## 7. Logos de Dispositivos (5 iconos)

Iconos monocromáticos blancos sobre transparente para la sección de TrustLogos. Se muestran con `grayscale` y opacidad reducida por CSS.

| # | Archivo | Dimensiones | Formato | Nota |
|---|---------|-------------|---------|------|
| 1 | `logo-firestick.png` | 140×45 | PNG-24, transparente | Silueta del Fire TV Stick + texto "Fire TV" en blanco puro. Estilo outline minimalista. |
| 2 | `logo-tvbox.png` | 140×45 | PNG-24, transparente | Icono de TV Box genérico: cubo/caja small con antena WiFi arriba, estilo line icon en blanco puro. |
| 3 | `logo-googletv.png` | 140×45 | PNG-24, transparente | Wordmark "Google TV" en tipografía sans-serif clean, color blanco puro. Estilo wordmark simple. |
| 4 | `logo-xiaomi.png` | 140×45 | PNG-24, transparente | Logotipo "Xiaomi" estilo wordmark minimalista en blanco puro. Sin el cuadrado naranja, solo texto. |
| 5 | `logo-android.png` | 140×45 | PNG-24, transparente | Silueta del bugdroid (robot de Android) en blanco puro, estilo icónico flat. Sin sombras ni gradientes. |

---

## 8. Open Graph / Social Share (1 imagen)

| # | Archivo | Dimensiones | Formato final |
|---|---------|-------------|---------------|
| 1 | `og-cover.webp` | 1200×630 | WebP, calidad 85 |

### 8.1 — `og-cover.webp`

> **Propósito:** Imagen de previsualización cuando se comparte el link en WhatsApp, Facebook, Twitter, Telegram. Debe verse profesional y comunicar el producto instantáneamente en un thumbnail pequeño.
>
> **Prompt:**
> Composición horizontal tipo banner de campaña digital: fondo degradado de dark (#0A0A0A) a dark navy (#161616) de izquierda a derecha. En el centro-izquierda: logo de Flujo TV en blanco (dejar espacio para colocarlo en postproducción). Debajo del logo: texto "Todo tu entretenimiento en una sola app" en tipografía sans-serif bold blanca. En el lado derecho: composición de 3 dispositivos (celular, tablet y TV) en ángulo 30° mostrando contenido de streaming con pantallas vibrantes iluminadas. Un sutil glow rosado-ámbar (#E11D48 a #F59E0B) difuso emanando desde atrás de los dispositivos. Bordes del banner: sutil borde fino de 1px white/10. Estilo: asset de marketing digital tipo banner de App Store o Google Play feature graphic. Resolución: 1200×630px exactos.
>
> **Negativo:** Sin demasiado texto (debe ser legible como thumbnail). Sin imágenes de personas. Sin fondos claros. Sin más de 2 colores de acento.

---

## Resumen de Assets

| Sección | Cant. | Archivos |
|---------|-------|----------|
| Video Hero | 1+1 | hero-bg.mp4/.webm + hero-poster.webp |
| Logo | 1 | logo_flujo.webp |
| Beneficios | 6 | benefit-4k, benefit-speed, benefit-channels, benefit-screens, benefit-support, benefit-freedom |
| Catálogo | 4 | cat-movies, cat-series, cat-sports, cat-live |
| Pasos | 3 | step-plan, step-install, step-enjoy |
| Descarga | 1 | download-devices |
| Clientes | 4 | client-01 a client-04 |
| Logos | 5 | logo-firestick, logo-tvbox, logo-googletv, logo-xiaomi, logo-android |
| OG | 1 | og-cover |
| **TOTAL** | **27 imágenes + 1 video (2 formatos)** | |

---

## Notas Técnicas de Producción

### Formato y compresión
- **Fotos:** Generar en JPG/PNG → convertir a **WebP** (calidad 80-85%) con Squoosh, cwebp o ImageMagick.
- **Video:** Exportar en H.264 MP4 (2-4 Mbps, 24fps) + WebM VP9 (1.5-3 Mbps). Usar FFmpeg:
  ```bash
  # MP4 optimizado
  ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart hero-bg.mp4
  # WebM
  ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -an hero-bg.webm
  ```
- **Logos PNG:** ya son transparentes, mantener como PNG-24.

### Peso máximo recomendado
| Tipo | Peso máximo |
|------|-------------|
| Imágenes hero/catálogo | 120KB |
| Imágenes beneficios/pasos | 80KB |
| Retratos clientes | 50KB |
| Logos PNG | 10KB |
| Video MP4 | 5MB |
| Video WebM | 3MB |
| OG cover | 100KB |

### Representación visual
- Las personas deben representar **diversidad latinoamericana auténtica** (diferentes tonos de piel, contextos socioeconómicos medios, ambientes reales de LATAM).
- **NO** incluir marcas registradas visibles (Netflix, Disney, ESPN, etc.) en ninguna imagen.
- Los retratos de clientes deben parecer **fotos reales tomadas por amigos**, no sesiones de estudio profesionales.
- Todos los dispositivos mostrados deben ser **Android** — nunca iPhones, iPads ni dispositivos Apple.

### Herramientas recomendadas para generación
- **Midjourney v6+** o **DALL-E 3** para fotografía editorial
- **Stable Diffusion XL + Realistic Vision** para retratos
- **Pexels / Unsplash** para fotos stock reales (más creíbles para retratos)
- **Runway ML** o **Pika Labs** para el video del hero
- **Squoosh** (squoosh.app) para conversión a WebP
