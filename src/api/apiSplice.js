import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSplice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),

    tagTypes: ['User'],
    endpoints: (buider) => ({
        login: buider.mutation({
            query: ({ userName, contraseña }) => ({
                url: 'login',
                method: "POST",
                body: { userName: userName, contraseña: contraseña }
            })
        }),

        clicks: buider.query({
            query: () => 'resumen'
        }),

        //traer las aperturas
        aperturas: buider.query({
            query: () => '/'
        })
    })

});

export const { useLoginMutation, useAperturasQuery, useClicksQuery } = apiSplice