let actions = {



    SEARCH_PRODUCTS({commit}, query) {
        let params = {
            query
        };
        axios.get(`http://localhost:8000/api/search`, {params})
            .then(res => {
                if (res.data)
                 commit('SET_PRODUCTS', res.data)
                    console.log('request sent successfully')

            }).catch(err => {
            console.log(err)
        })
    },
    GET_PRODUCTS({commit}) {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                {
                    commit('SET_PRODUCTS', res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

}

export default actions
