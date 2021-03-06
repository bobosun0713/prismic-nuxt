import MyComponent from '../../../../slices/BannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Matrix turn-key niches","spans":[]}],"description":[{"type":"paragraph","text":"Nisi in labore in reprehenderit deserunt pariatur id consectetur quis ad ad nisi culpa proident. Consequat nulla voluptate consequat occaecat aliquip voluptate est pariatur culpa incididunt sunt proident adipisicing.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
