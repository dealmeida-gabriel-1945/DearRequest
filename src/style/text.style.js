import {ColorConstants} from "../util/constants/color.constants";

export const TextStyle ={
    makeFontSize: (fs, padrao = 15) => ({fontSize: (fs) ? fs : padrao}),
    textDecoration : {
        negrito: {fontWeight: 'bold'},
        italico: {textDecoration: 'italic'},
        sublinhado: {textDecoration: 'underline'},
    },
    textColor:{
        azul: {color: ColorConstants.AZUL},
        branco: {color: ColorConstants.BRANCO},
        preto: {color: 'black'},
        verdePadrao: {color: ColorConstants.VERDE_PADRAO},
        vermelho: {color: ColorConstants.VERMELHO},
        fromColor: (color) => ({color: color}),
    },
}
