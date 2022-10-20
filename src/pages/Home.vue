<template>
    <div class="row">

        <div class="col-lg-12">

            <h1 class="my-4 title-tenant">Restaurantes</h1>

            <div class="row my-4">

                <div v-for="(company, index) in companies.data" :key="index" class="col-lg-4 col-md-6 mb-4">
                    <div class="restaurant-card">
                        <router-link :to="{name: 'products'}">
                            <img v-if="company.image" class="card-img-top" :src="company.image" :alt="company.name">
                            <img v-else class="card-img-top" src="@/assets/imgs/vue-food.png" :alt="company.name">
                        </router-link>
                        <div class="restaurant-card-body">
                            <h3>
                                <router-link :to="{name: 'products'}">
                                    {{ company.name }}
                                </router-link>
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
    mounted() { // assim que montar o componente Home, chama a action getCompanies
        // usando o mapActions
        this.getCompanies()

        //this.$store.dispatch('getCompanies')
    },

    computed: {
        companies() {
            return this.$store.state.companies.items
        }
    },

    methods: {
        ...mapActions([
            'getCompanies'
        ])
    }
}
</script>