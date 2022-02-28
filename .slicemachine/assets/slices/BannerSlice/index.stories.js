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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Aggregate extensible synergies","spans":[]}],"description":[{"type":"paragraph","text":"Esse tempor culpa consequat anim quis mollit et.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
