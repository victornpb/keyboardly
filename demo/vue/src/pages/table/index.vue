<template>
  <div>

    <v-text-field label="Search"/>
    <v-data-table
      :headers="headerArray"
      :items="itemsArray"
      :search="search"
      :hide-default-header="hideHeaders"
      :show-select="showSelect"
      :loading="isLoading"
      hide-default-footer
      item-key="name"
      class="elevation-1"
    >

      <template
        v-slot:body="{ items }"
      >
        <tbody>
          <tr
            v-for="item in items"
            :key="item.name"
            data-shortcut-component
          >
            <td>{{ item.name }}</td>
            <td><v-btn data-shortcut="Enter">Enter</v-btn></td>
            <td><input></td>
            <td><v-text-field label="text"/></td>
            <td>
              <v-btn icon data-shortcut="Delete|Backspace"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
            <td>
              (jkl)
              <v-btn icon data-shortcut="j"><v-icon>mdi-skip-previous</v-icon></v-btn>
              <v-btn icon data-shortcut="k"><v-icon>mdi-play</v-icon></v-btn>
              <v-btn icon data-shortcut="l"><v-icon>mdi-skip-next</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7%',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8%',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16%',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0%',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2%',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45%',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22%',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6%',
    },
  ]

  export default {
    data () {
      return {
        enabled: null,
        itemsArray: desserts,
        search: null,
        slots: [
          'body',
          'body.append',
          'body.prepend',
          'footer',
          'header.data-table-select',
          'header',
          'progress',
          'item.data-table-select',
          'item.<name>',
          'no-data',
          'no-results',
          'top',
        ],
        headerArray: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
      }
    },

    computed: {
      showSelect () {
        return this.isEnabled('header.data-table-select') || this.isEnabled('item.data-table-select')
      },
      hideHeaders () {
        return !this.showSelect
      },
      isLoading () {
        return this.isEnabled('progress')
      },
    },

    watch: {
      enabled (slot) {
        if (slot === 'no-data') {
          this.items = []
        } else if (slot === 'no-results') {
          this.search = '...'
        } else {
          this.search = null
          this.items = desserts
        }
      },
    },

    methods: {
      isEnabled (slot) {
        return this.enabled === slot
      },
    },
  }
</script>