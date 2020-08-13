<template>
  <div id="app" class="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
        v-for="item in simpleMenu"
        :addToShoppingCart="addToShoppingCart"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
      />
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem";
export default {
  name: "Home",
  components: {
    MenuItem,
  },
  data() {
    return {
      restaurantName: "La belle Vue",
      shoppingCart: 0,
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            source: "/images/crossiant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 1,
        },
        {
          name: "Baguette de pain",
          image: {
            source: "/images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 1,
        },
        {
          name: "Éclair",
          image: {
            source: "/images/eclair.jpg",
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount;
    },
  },
};
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>
