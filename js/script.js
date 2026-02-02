
const app = {
  data() {
    return {
      buscar: '',
      recetaSeleccionada: null,
      recetas: 
    [
        //chimichangas
        {
          nombre: 'Chimichangas',
          porciones: 6,

                ingredientes: [
                    '1/4 Taza Manteca de cerdo',
                    '2 Tazas Frijoles refritos negros, 18 Piezas Tortillas de harina calientes', 
                    '1 Paquete Queso tipo manchego (215 g)', 
                    '1/2 Taza Aceite de maíz', 
                    '8 Piezas Jitomate cocidos y sin piel', 
                    'para la salsa de chipotle', 
                    '3 Piezas Chile chipotle para la salsa de chipotle', 
                    '1/2 Cucharadita Cebolla en polvo para la salsa de chipotle', 
                    '1 Cubo Concentrado de Tomate con Pollo CONSOMATE® para la salsa de chipotle', 
                    '1 Cucharada Manteca de cerdo para la salsa de chipotle, 1/2 Pieza Cebolla fileteada', 
                    'para la salsa de chipotle', 
                    '200 Gramos Queso Panela rallado', 
                    '1 Lata Media Crema NESTLÉ®'
                            ],
          
                pasos: [
                    'Fríe los frijoles en la manteca.',
                    'Rellena las tortillas con frijoles y queso.',
                    'Fríe hasta dorar.',
                    'Sirve con salsa.'
                ],
                 imagen: '../image/chimichangas.jpg', 

        }, 

        //tacos de pollo

         {
          nombre: 'Tacos de pollo',
          porciones: '12 tacos',

                ingredientes: [
                    '2 pechugas de pollo cocidas y deshebradas',
                    '12 tortillas de maíz', 
                    '1 diente de ajo', 
                    '1/2 cebolla picada', 
                    'Aceite vegetal', 
                    'Sal y pimienta al gusto', 
                    '---para acompañar---', 
                    'Lechuga picada', 
                    'Queso rallado', 
                    'Crema', 
                    'Salsa',
                            ],
          
                pasos: [
                    'Sofríe la cebolla y el ajo en un poco de aceite.',
                    'Agrega el pollo, salpimienta y cocina 5 minutos.',
                    'Rellena las tortillas con el pollo y dóblalas.',
                    'Fríe los tacos hasta que estén dorados.',
                    'Sirve con lechuga, queso, crema y salsa..',
                ],
                 imagen: '../image/tacos.jpg', 

        },

        {
          nombre: 'Hotcakes',
          porciones: '6-8 hotcakes',

                ingredientes: [
                    '1 taza de harina de trigo',
                    '1 cucharada de azúcar', 
                    '1 cucharadita de polvo para hornear', 
                    '1 huevo', 
                    '3/4 taza de leche', 
                    '1 cucharada de mantequilla derretida', 
                    '1 pizca de sal', 
                            ],
          
                pasos: [
                    'Mezcla la harina, azúcar, polvo para hornear y sal.',
                    'Agrega el huevo, la leche y la mantequilla. Mezcla bien.',
                    'Calienta un sartén y engrásalo ligeramente.',
                    'Vierte un poco de mezcla y cocina hasta que salgan burbujas.',
                    'Voltea y cocina 1 minuto más.',
                    'Sirve con miel, frutas o mermelada.',
                ],
                 imagen: '../image/hotcakes.jpg', 

        },

        {
          nombre: 'EL chiste del Pinguino',
          porciones: '9',

                ingredientes: [
                    'profesor',
                    'otro profesor', 
                    'director', 
                    'esposa', 
                    'hijo', 
                    'oficial', 
                    'supervisor', 
                    'San pedro', 
                    'El Diablo', 
                    'un sujeto', 
                            ],
          
                pasos: [
                     'Un día estaban dos profesores hablando y llegaron al tema de los pingüinos. Entonces uno le dice al otro: oye, ¿has visto un pingüino? y el otro responde: no, nunca he visto un pingüino. El primero, sorprendido, le vuelve a preguntar: ¿en serio nunca has visto un pingüino? y él responde: no, nunca he visto un pingüino. Entonces le dice: no, tú tienes que ir a la oficina del director.',
                     'Cuando llega a la oficina, el director lo ve y le pregunta: ¿qué hace aquí? y el profesor responde: fijese que estaba hablando con otro profesor y me mandó aquí porque nunca he visto un pingüino. El director pregunta: ¿nunca has visto un pingüino? y él responde: no, nunca he visto un pingüino. Entonces el director le dice: no, yo te tengo que despedir, y lo despide.',
                     'El hombre llega a su casa y su esposa, sorprendida de verlo ahi le pregunta: ¿qué haces aquí? y él responde: fijate que hablando con otro profesor, me mando a la oficina del director y el director me despidió, todo porque nunca he visto un pingüino. Entonces la esposa le dice, ¿nunca haz visto un pinguino?: él responde: no, nunca he visto un pingüino. en toces la esposa le dice, lo siento pero yo quiero el divorcio.',
                     'El hombre, triste, se va a la sala y su hijo lo ve y le pregunta: ¿qué tienes, papá? y él responde: fijate que hablando con otro profesor me mando con el director, el director me despidió, tu mamá me pidió el divorcio, todo porque nunca he visto un pingüino. El hijo le pregunta: ¿nunca has visto un pingüino? y él responde: no, nunca he visto un pingüino. Entonces el hijo le dice: no, papá, yo te odio.',
                     'El hombre sale triste a la calle y un oficial lo ve y le pregunta: ¿qué tiene, señor? y el hombre responde: fijese que yo antes er profesor hablando con otro profesor me mando con el director, el director me despidió, mi mujer me pidio el divorcio y mi hijo me odia y todo por que nunca he visto un pinguino El oficial le pregunta: ¿nunca ha visto un pingüino? y él responde: no, nunca he visto un pingüino. Entonces el oficial le dice: no, yo te tengo que arrestar, y lo arresta.',
                     'Ya en la cárcel, el supervisor lo ve y le pregunta: disculpe seño usted se ve inocente ¿cómo llegó aqui?, y el hombre le dice: fíjese que yo antes era profesor, hablando con otro profesor me mando a la oficina el director, el director me despidió, mi mujer me pidió el divorcio, mi hijo me odia, un oficial me arrestó y todo porque nunca ha visto un pingüino. El supervisor le pregunta: ¿nunca has visto un pingüino? y él responde: no, nunca he visto un pingüino., el supervisor le dice: no, yo a usted tengo que matarlo, le dispara entre ceja y ceja.',
                     'El hombre llega a las puertas del cielo y San Pedro le pregunta: disculpe ¿cómo llegó aqui?. El hombre le dice: fíjese que yo antes era profesor, hablando con otro profesor me mando a la oficina del director, el director me despidió, mi mujer me pidió el divorcio, mi hijo me odia, un oficial me arrestó, otro me disparó todo porque nunca he visto un pingüino. San Pedro le pregunta: ¿nunca has visto un pingüino? y el hombre le responde: no, nunca he visto un pinguino, San Pedro le dice: el cielo no es para ti, y lo manda al infierno.',
                     'El hombre llega a las puertas del infierno y se encuentra al mismisimo diablo y entonces el diablo le pregunta: oye, tu vez demasiado bueno, ¿cómo llegaste aquí?. El hombre le dice: fíjese que yo antes era profesor, hablando con otro profesor me mando a la oficina del director, el director me despidió, mi mujer me pidió el divorcio, mi hijo me odia, un oficial me arrestó, otro me disparó, San Pedro me mandó al infierno todo porque nunca he visto un pingüino. El diablo le pregunta: ¿nunca has visto un pingüino?, el hombre responde: no, nunca he visto un pingüino. el diablo le dice: no, el infierno no es para ti. y lo manda a otro lugar, un lugar oscuro, oscuro, pero muy oscuro..',
                     'Y En ese lugar oscuro se encuentra con otro hombre, ese hombre se le acerca y le pregunta: Oye, ¿cómo llegaste aquí?. El hombre le dice: fíjese que yo antes era profesor, hablando con otro profesor me mando a la oficina del director, el director me despidió, mi mujer me pidió el divorcio, mi hijo me odia, un oficial me arrestó, otro me disparó, San Pedro me mandó al infierno y el diablo me mandó aquí, todo porque nunca he visto un pingüino. El otro hombre le pregunta: ¿nunca has visto un pingüino? y él responde: no, nunca he visto un pingüino. Entonces el otro hombre dice: ah… yo tampoco.',        
                ],

                 imagen: '../image/pinguinoa.jpg', 

        },



      ],  //termina las recetas

      recetaSeleccionada: null,
      formularioReceta: false,

      nuevaReceta: {
            nombre: '',
            porciones: '',
            imagen: '',
            ingredientes: [],
            pasos: []
        },

      ingredienteT: '',
      pasoT: '',
        
    }
  },

  methods: {
        seleccionar(receta) {
        this.recetaSeleccionada = receta
        },
        
        seleccionarReceta(receta) {
        this.recetaSeleccionada = receta;
        },


        agregarIngrediente() {
            if (this.ingredienteT.trim() !== "") {
                this.nuevaReceta.ingredientes.push(this.ingredienteT);
                this.ingredienteT = "";
            }
        },

        agregarPaso() {
            if (this.pasoT.trim() !== "") {
                this.nuevaReceta.pasos.push(this.pasoT);
                this.pasoT = "";
            }
        },

        guardarReceta() {
            if (this.nuevaReceta.nombre) {
                this.recetas.push({
                    nombre: this.nuevaReceta.nombre,
                    porciones: this.nuevaReceta.porciones,
                    imagen: this.nuevaReceta.imagen,
                    ingredientes: this.nuevaReceta.ingredientes,
                    pasos: this.nuevaReceta.pasos
                });

                this.nuevaReceta = {
                    nombre: '',
                    porciones: '',
                    imagen: '',
                    ingredientes: [],
                    pasos: []
                };

                this.formularioReceta = false;
            }
        },

        cancelarFormularioReceta() {
            this.formularioReceta = false;
            this.nuevaReceta = {
                nombre: '',
                porciones: '',
                imagen: '',
                ingredientes: [],
                pasos: []
            };
            
        }

  }
}

const app1 = Vue.createApp(app).mount('#componente')

