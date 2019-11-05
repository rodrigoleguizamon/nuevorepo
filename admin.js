[]

const fs = require("fs");

const rutaDeArchivo = __dirname + '/pedidos.json'

pedidos = fs.readFileSync(rutaDeArchivo, {encoding: 'utf8'})

pedidos = JSON.parse(pedidos)

function cantidadPedidos(pedidos){
    if(pedidos.length > 0){
        return pedidos.length
    }else{
        return 'Actualmente el sistema no tiene pedidos para generar el reporte'
    }
}

 console.log('¡Reporte generado con éxito!')
 console.log('|===*** Reporte de ventas ***====|')
 console.log('Fecha de generación: ' )
 console.log('Hora: ')
 console.log('|===*** Cantidad de pedidos realizados ***====|')
 console.log('Total: ' + cantidadPedidos(pedidos))
 console.log('|===*** Cantidad de pedidos para delivery ***====|')
 console.log('Total: __')
 console.log('|===*** Cantidad de pizzas vendidas por gusto ***====|')
 console.log('Total Muzzarella: __')
 console.log('Total Jamón y morrón: __')
 console.log('Total Calabresa: __')
 console.log('Total Napolitana: __')
 console.log('|===*** Cantidad de pizzas vendidas por tamaño ***====|')
 console.log('Total Personal: __')
 console.log('Total Mediana: __')
 console.log('Total Grande: __')
 console.log('Total: __')
 console.log('|===*** Cantidad de clientes habituales ***====|')
 console.log('Total: __')
 console.log('|===*** Cantidad de empanadas regaladas ***====|')
 console.log('Total: __')
