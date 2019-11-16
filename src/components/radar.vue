
<horizontal-bar></horizontal-bar>

<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: {
    datacollection: Array,
    options: Array
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
