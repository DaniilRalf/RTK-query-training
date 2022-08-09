import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3333/'}),


    endpoints: (build) => ({

        getGoods: build.query({
            // query: () => '/goods',
            query: (limit) => `/goods?${limit && `_limit=${limit}`}`,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }) => ({ type: 'Products', id })),
                { type: 'Products', id: 'LIST' },]
            : [{ type: 'Products', id: 'LIST' }],
        }),

        addPRoduct: build.mutation({
            query: (body) => ({
                url: '/goods',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }]
        })
    })
});


export const { useGetGoodsQuery, useAddPRoductMutation} = goodsApi; 
//кстомныe хукu которыe создаетса автоматически для каждого эндпоинта