<template>
    <v-container>
        <title>Halaman Login</title>
        <h1
            align="center"
        >Halaman Login</h1>
        <v-layout row  justify-center>
            <v-flex xs5>
                <v-text-field
                    type="text"
                    label="Email"
                    v-model="email"
                />
            </v-flex>
            <span>{{ errors.first('email') }}</span>
        </v-layout>
        <v-layout row  justify-center>
            <v-flex xs5>
                <v-text-field
                    type="password"
                    label="Kata Sandi"
                />
            </v-flex>
        </v-layout>
        <v-layout row  justify-center>
           <v-flex xs5> 
                <v-btn
                    depressed
                    color="indigo"
                    round
                    dark
                >Masuk</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            email:null
        }
    }
}
</script>

<style>

</style>
