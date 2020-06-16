module.exports = {
    imc(request, response) {
        const { altura, peso } = request.body;
        if ((altura * altura) / peso < 18.5)
            response.json({
                result: 'voc� est� abaixo do peso',
            });
        else if ((altura * altura) / peso > 18.5 && (altura * altura) / peso < 25)
            response.json({
                result: 'seu peso est� normal',
            });
        else if ((altura * altura) / peso > 25 && (altura * altura) / peso < 30)
            response.json({
                result: 'voc� est� acima do peso',
            });
        else if ((altura * altura) / peso > 30)
            response.json({
                result: 'voc� est� com obesidade m�rbida',
            });

    }
}