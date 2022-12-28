import { defineStore } from "pinia";

const localStorageKeyName = "scssecoBrandCartItems";
import dataSite from "../../../001-super_global_files/dataSite.json";
const contentful = require("contentful");

const addCartToLocalStorage = (cart) => {
  localStorage.setItem(localStorageKeyName, JSON.stringify(cart));
};

export const useWebStoreBrand = defineStore("WebStoreStore", {
  state: () => ({
    productsShow: [],
    productsBackup: [],
    cart: [],
    cartItems: 0,
    cartTotal: 0,
    filters: [],
    loading: true,
  }),
  getters: {},
  actions: {
    productsFetch() {
      const fetchTheProducts = async () => {
        try {
          const client = contentful.createClient({
            space: dataSite.WebStoreBrand.spaceID,
            accessToken: dataSite.WebStoreBrand.accessToken,
          });

          const res = await client.getEntries({});

          // console.log(res.items);

          res.items.forEach((item, index) => {
            this.productsShow.push({});

            // keys that one or more products have
            // // Get thumbnail
            if (item.fields.thumbnail) {
              res.includes.Asset.forEach((asset) => {
                // console.log(asset);
                if (asset.sys.id === item.fields.thumbnail.sys.id) {
                  this.productsShow[index].thumbnail = {
                    title: asset.fields.description,
                    link: `https:${asset.fields.file.url}`,
                    width: asset.fields.file.details.image.width,
                    height: asset.fields.file.details.image.height,
                  };
                }
              });
            }
            // // Get Images
            this.productsShow[index].images = [];
            if (item.fields.images) {
              res.items[index].fields.images.forEach((image, indx) => {
                this.productsShow[index].images.push({
                  title: "",
                  link: "",
                  width: 0,
                  height: 0,
                });

                res.includes.Asset.forEach((asset) => {
                  if (image.sys.id === asset.sys.id) {
                    this.productsShow[index].images[indx].title = asset.fields.description;
                    this.productsShow[index].images[indx].link = `https:${asset.fields.file.url}`;
                    this.productsShow[index].images[indx].width = asset.fields.file.details.image.width;
                    this.productsShow[index].images[indx].height = asset.fields.file.details.image.height;
                  }
                });
              });
            }
            this.productsShow[index].id = item.sys.id;
            this.productsShow[index].title = item.fields.title;
            this.productsShow[index].brand = item.fields.brand;
            this.productsShow[index].type = item.sys.contentType.sys.id;
            this.productsShow[index].price = item.fields.price;
            this.productsShow[index].discountPercentage = item.fields.discountPercentage;
            this.productsShow[index].discountedPrice = this.productsShow[index].discountPercentage
              ? parseFloat(
                  (
                    this.productsShow[index].price -
                    (this.productsShow[index].price / 100) * this.productsShow[index].discountPercentage
                  ).toFixed(2)
                )
              : 0;
            this.productsShow[index].stock = item.fields.stock;
            this.productsShow[index].cartQuantity = 0;
            this.productsShow[index].recommendedForGaming = item.fields.recommendedForGaming;
            this.productsShow[index].series = item.fields.series;
            this.productsShow[index].manufacturingTechnology = item.fields.manufacturingTechnology;
            this.productsShow[index].memoryType = item.fields.memoryType;
            this.productsShow[index].chipsetManufacturer = item.fields.chipsetManufacturer;
            this.productsShow[index].maximumMemory = item.fields.maximumMemory;

            // Video Cards
            this.productsShow[index].interface = item.fields.interface;
            this.productsShow[index].maximumResolution = item.fields.maximumResolution;
            this.productsShow[index].model = item.fields.model;
            this.productsShow[index].editionCooling = item.fields.editionCooling;
            this.productsShow[index].graphicsProcessor = item.fields.graphicsProcessor;
            this.productsShow[index].memorySize = item.fields.memorySize;
            this.productsShow[index].memoryBus = item.fields.memoryBus;
            this.productsShow[index].hdmiPorts = item.fields.hdmiPorts;
            this.productsShow[index].dpPorts = item.fields.dpPorts;
            this.productsShow[index].separatePowerSupply = item.fields.separatePowerSupply;
            this.productsShow[index].size = item.fields.size;
            this.productsShow[index].backplate = item.fields.backplate;

            // Processors
            this.productsShow[index].socket = item.fields.socket;
            this.productsShow[index].core = item.fields.core;
            this.productsShow[index].numberOfCores = item.fields.numberOfCores;
            this.productsShow[index].numberOfThreads = item.fields.numberOfThreads;
            this.productsShow[index].frequency = item.fields.frequency;
            this.productsShow[index].turboFrequency = item.fields.turboFrequency;
            this.productsShow[index].smartCache = item.fields.smartCache;
            this.productsShow[index].cacheLevel1 = item.fields.cacheLevel1;
            this.productsShow[index].cacheLevel2 = item.fields.cacheLevel2;
            this.productsShow[index].cacheLevel3 = item.fields.cacheLevel3;
            this.productsShow[index].totalPowerDissipated = item.fields.totalPowerDissipated;
            this.productsShow[index].stockCoolerIncluded = item.fields.stockCoolerIncluded;
            this.productsShow[index].unlocked = item.fields.unlocked;
            this.productsShow[index].graphicsModel = item.fields.graphicsModel;
            this.productsShow[index].graphicFrequency = item.fields.graphicFrequency;
            this.productsShow[index].dynamicGraphicFrequency = item.fields.dynamicGraphicFrequency;
            this.productsShow[index].maximumVideoMemory = item.fields.maximumVideoMemory;
            this.productsShow[index].memoryFrequency = item.fields.memoryFrequency;
            this.productsShow[index].memorySupport = item.fields.memorySupport;

            // Motherboards
            this.productsShow[index].format = item.fields.format;
            this.productsShow[index].processorSocket = item.fields.processorSocket;
            this.productsShow[index].chipsetModel = item.fields.chipsetModel;
            this.productsShow[index].supportedProcessors = item.fields.supportedProcessors;
            this.productsShow[index].graphicInterface = item.fields.graphicInterface;
            this.productsShow[index].raid = item.fields.raid;
            this.productsShow[index].integratedVideoCard = item.fields.integratedVideoCard;
            this.productsShow[index].integratedAudioCard = item.fields.integratedAudioCard;
            this.productsShow[index].audioChipset = item.fields.audioChipset;
            this.productsShow[index].integratedNetworkCard = item.fields.integratedNetworkCard;
            this.productsShow[index].sataIii = item.fields.sataIii;
            this.productsShow[index].m2 = item.fields.m2;
            this.productsShow[index].numberOfSlots = item.fields.numberOfSlots;
            this.productsShow[index].technology = item.fields.technology;
            this.productsShow[index].supportedFrequencies = item.fields.supportedFrequencies;
            this.productsShow[index].pciExpress40X16 = item.fields.pciExpress40X16;
            this.productsShow[index].pciExpressX1 = item.fields.pciExpressX1;
            this.productsShow[index].multiGpuSli = item.fields.multiGpuSli;
            this.productsShow[index].multiGpuCrossfireX = item.fields.multiGpuCrossfireX;
            this.productsShow[index].ps2MouseKeyboard = item.fields.ps2MouseKeyboard;
            this.productsShow[index].opticalSpdifOut = item.fields.opticalSpdifOut;
            this.productsShow[index].usb20 = item.fields.usb20;
            this.productsShow[index].usb31TipA = item.fields.usb31TipA;
            this.productsShow[index].usb31TipC = item.fields.usb31TipC;
            this.productsShow[index].rj45Lan = item.fields.rj45Lan;
            this.productsShow[index].audioSupport = item.fields.audioSupport;
            this.productsShow[index].bluetooth = item.fields.bluetooth;
            this.productsShow[index].wireless = item.fields.wireless;
            this.productsShow[index].specialConnectors = item.fields.specialConnectors;
            this.productsShow[index].biosFlashback = item.fields.biosFlashback;

            const re = /[A-Z|a-z]\w+/g;
            const rezs = this.productsShow[index].type.match(re);
            // console.log("this.productsShow[index].type: " + this.productsShow[index].type);
            // console.log(rezs);

            this.filters.push({
              id: this.productsShow[index].type.toLowerCase(),
              type: "type",
              label: this.productsShow[index].type,
              active: false,
            });

            this.filters.push({
              id: this.productsShow[index].brand.toLowerCase(),
              type: "brand",
              label: this.productsShow[index].brand,
              active: false,
            });
            //
            // Filters
            //
            // Type filters
            // this.testTags.type.push({
            //   id: this.productsShow[index].type,
            // });

            // console.log(this.testTags);
          });

          // console.log(this.filters);

          // Declare a new array
          let newArray = [];

          // Declare an empty object
          let uniqueObject = {};

          // Loop for the array elements
          for (let i in this.filters) {
            // Extract the title
            let objID = this.filters[i]["id"];

            // Use the title as the index
            uniqueObject[objID] = this.filters[i];
          }

          // Loop to push unique object into array
          for (let i in uniqueObject) {
            newArray.push(uniqueObject[i]);
          }

          this.filters = newArray;

          console.log(this.productsShow);
          // Display the unique objects

          this.loading = false;
          this.productsBackup = this.productsShow;

          if (
            localStorage.getItem(localStorageKeyName) === null ||
            JSON.parse(localStorage.getItem(localStorageKeyName)).length == 0
          )
            return;

          const localCart = [...JSON.parse(localStorage.getItem(localStorageKeyName))];

          localCart.forEach((cartItem) => {
            this.cartItems += cartItem.cartQuantity;

            this.productsShow.filter((product) => {
              if (product.id == cartItem.id) {
                product.cartQuantity = cartItem.cartQuantity;
              }
            });

            if (cartItem.cartQuantity > 0) {
              this.cartTotal += cartItem.discountedPrice
                ? cartItem.discountedPrice * cartItem.cartQuantity
                : cartItem.price * cartItem.cartQuantity;
            } else {
              this.cartTotal += cartItem.discountedPrice ? cartItem.discountedPrice : cartItem.price;
            }
          });
        } catch (err) {
          console.log(err);
        }
      };

      fetchTheProducts();
    },
    cartFetch() {
      if (localStorage.getItem(localStorageKeyName) === null) return;
      const cart = JSON.parse(localStorage.getItem(localStorageKeyName));
      this.cart = cart;
    },
    addToBag(id) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === id) {
          return;
        }
      }

      for (let i = 0; i < this.productsShow.length; i++) {
        if (this.productsShow[i].id === id && this.productsShow[i].stock === 0) {
          return;
        }
      }

      const productToBag = this.productsShow.filter((product) => {
        if (product.id === id) {
          this.cartItems++;
          this.cartTotal += product.discountedPrice ? product.discountedPrice : product.price;
        }

        return product.id === id;
      });

      this.productsShow.forEach((product) => {
        if (product.id == id) {
          product.cartQuantity++;
        }
      });

      this.cart.push(productToBag[0]);

      addCartToLocalStorage(this.cart);
    },
    increaseQuantity(id) {
      this.productsShow.forEach((product) => {
        if (product.id == id) {
          if (product.cartQuantity >= product.stock) return;
          this.cartItems++;
          product.cartQuantity++;
        }
      });

      this.cart.forEach((cartItem) => {
        if (cartItem.id == id) {
          if (cartItem.cartQuantity >= cartItem.stock) return;
          cartItem.cartQuantity++;

          this.cartTotal += cartItem.discountedPrice ? cartItem.discountedPrice : cartItem.price;
          this.cartTotal.toFixed(2);
        }
      });

      addCartToLocalStorage(this.cart);
    },
    decreaseQuantity(id) {
      this.productsShow.forEach((product) => {
        if (product.id == id && product.cartQuantity > 0) {
          this.cartItems--;
          product.cartQuantity--;
          this.cartTotal -= product.discountedPrice ? product.discountedPrice : product.price;
          this.cartTotal.toFixed(2);
        }

        if (product.id == id && product.cartQuantity == 0) {
          this.cart = this.cart.filter((cartItem) => {
            if (cartItem.id != id) {
              return cartItem;
            }
          });
        }
      });

      this.cart.forEach((cartItem) => {
        if (cartItem.id == id && cartItem.cartQuantity > 0) {
          cartItem.cartQuantity--;

          // this.cartTotal -= cartItem.price;
        }
      });

      addCartToLocalStorage(this.cart);
    },
    removeItemFromCart(id) {
      this.productsShow.forEach((product) => {
        if (product.id == id) {
          this.cart = this.cart.filter((cartItem) => {
            if (cartItem.id != id) {
              return cartItem;
            }
            if (cartItem.cartQuantity > 0) {
              this.cartTotal -= cartItem.discountedPrice
                ? cartItem.discountedPrice * cartItem.cartQuantity
                : cartItem.price * cartItem.cartQuantity;

              this.cartItems = this.cartItems - cartItem.cartQuantity;
            } else {
              this.cartTotal -= cartItem.discountedPrice ? cartItem.discountedPrice : cartItem.price;
            }
          });

          product.cartQuantity = 0;
        }
      });

      addCartToLocalStorage(this.cart);
    },
    removeAllItemsFromCart() {
      console.log("remove");
      this.cart = [];
      this.cartItems = 0;
      this.cartTotal = 0;
      this.productsShow.filter((product) => {
        product.cartQuantity = 0;
      });
      localStorage.removeItem(localStorageKeyName);
    },
    sortByNameAsc() {
      this.productsShow.sort((a, b) => {
        if (a.title < b.title) return -1;
        return 1;
      });
    },
    sortByNameDesc() {
      this.productsShow.sort((a, b) => {
        if (a.title < b.title) return 1;
        return -1;
      });
    },
    sortByPriceAsc() {
      this.productsShow.sort((a, b) => a.price - b.price);
    },
    sortByPriceDesc() {
      this.productsShow.sort((a, b) => b.price - a.price);
    },
    filterProductsBrand(e) {
      if (e.length === 0) {
        this.productsShow = this.productsBackup;
        return;
      }

      this.productsShow = this.productsBackup;

      let filteredProducts = this.productsShow.filter((product) => {
        if (e.includes(product.brand)) {
          return true;
        }
        if (e.includes(product.type)) {
          return true;
        }
      });

      this.productsShow = filteredProducts;
    },
    filterProducts(e) {
      // this.productsShow = this.productsBackup;
      console.log(e.target.id);
    },
    filterProductsReset() {
      this.productsShow = this.productsBackup;
    },
  },
});
