import {configureStore} from "@reduxjs/toolkit";
import { goodsApi } from "./goodsApi";


export const store = configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer, 
        //динамический ключ ('goodsAPi'), 
        //а его значение это редьюссер но этого нет в этом файле, 
        //это потому что редьюсер создается не явно и сдержит в себе все эндпоинты
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
})