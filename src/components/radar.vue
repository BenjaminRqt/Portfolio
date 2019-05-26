
    <radar></radar>
<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
      datacollection: Array,
      options: Array
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>