<template>
    <v-container>
        <h1
            align="center"
            style="margin-bottom 10px"
        >Halaman Login</h1>
        <title>Halaman Login</title>
        <v-layout row justify-center>
            <v-flex sm5>
                <v-text-field
                type="text"
                label="Email"
                />
            </v-flex>
        </v-layout>
         <v-layout row justify-center>
            <v-flex sm5>
                <v-text-field
                type="Password"
                label="Kata Sandi"
                />
            </v-flex>
        </v-layout>
         <v-layout row justify-center>
            <v-flex sm5>
                <v-btn
                    color="indigo"
                    dark
                    round
                >Masuk</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods:{
        
    }
    
}
</script>

<style>

</style>
