'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('service', [
      {
        name: 'VIP瓷土洗車',
        kind: '小型',
        amount: 500
      },
      {
        name: 'VIP瓷土洗車',
        kind: '中型',
        amount: 550
      },
      {
        name: 'VIP瓷土洗車',
        kind: '大型',
        amount: 600
      },
      {
        name: 'VIP瓷土洗車',
        kind: '休旅車',
        amount: 650
      },
      {
        name: 'VIP瓷土洗車',
        kind: '特殊車款',
        amount: 750
      },
      {
        name: '頂級棕櫚蠟護理',
        kind: '小型',
        amount: 800
      },
      {
        name: '頂級棕櫚蠟護理',
        kind: '中型',
        amount: 850
      },
      {
        name: '頂級棕櫚蠟護理',
        kind: '大型',
        amount: 900
      },
      {
        name: '頂級棕櫚蠟護理',
        kind: '休旅車',
        amount: 950
      },
      {
        name: '頂級棕櫚蠟護理',
        kind: '特殊車款',
        amount: 1100
      },
      {
        name: '棕櫚蠟洗車卷買五送一',
        kind: '小型',
        amount: 4000
      },
      {
        name: '棕櫚蠟洗車卷買五送一',
        kind: '中型',
        amount: 4250
      },
      {
        name: '棕櫚蠟洗車卷買五送一',
        kind: '大型',
        amount: 4500
      },
      {
        name: '棕櫚蠟洗車卷買五送一',
        kind: '休旅車',
        amount: 4750
      },
      {
        name: '棕櫚蠟洗車卷買五送一',
        kind: '特殊車款',
        amount: 5500
      },
      {
        name: '超值A方案',
        kind: '小型',
        amount: 1999
      },
      {
        name: '超值A方案',
        kind: '中型',
        amount: 1999
      },
      {
        name: '超值A方案',
        kind: '大型',
        amount: 1999
      },
      {
        name: '超值A方案',
        kind: '休旅車',
        amount: 2999
      },
      {
        name: '超值A方案',
        kind: '特殊車款',
        amount: 2999
      },
      {
        name: '超值B方案',
        kind: '小型',
        amount: 2999
      },
      {
        name: '超值B方案',
        kind: '中型',
        amount: 2999
      },
      {
        name: '超值B方案',
        kind: '大型',
        amount: 1999
      },
      {
        name: '超值B方案',
        kind: '休旅車',
        amount: 3299
      },
      {
        name: '超值B方案',
        kind: '特殊車款',
        amount: 3299
      },
      {
        name: '機車清潔',
        kind: '小型',
        amount: 350
      },
      {
        name: '機車清潔',
        kind: '中型',
        amount: 350
      },
      {
        name: '機車清潔',
        kind: '大型',
        amount: 350
      },
      {
        name: '機車清潔',
        kind: '休旅車',
        amount: 350
      },
      {
        name: '機車清潔',
        kind: '特殊車款',
        amount: 350
      },


      {
        name: '鏡面小美容',
        kind: '小型',
        amount: 2500
      },
      {
        name: '鏡面小美容',
        kind: '中型',
        amount: 3000
      },
      {
        name: '鏡面小美容',
        kind: '大型',
        amount: 3500
      },
      {
        name: '鏡面小美容',
        kind: '休旅車',
        amount: 4000
      },
      {
        name: '鏡面小美容',
        kind: '特殊車款',
        amount: 5000
      },

      {
        name: '頂級大美容',
        kind: '小型',
        amount: 5000
      },
      {
        name: '頂級大美容',
        kind: '中型',
        amount: 5500
      },
      {
        name: '頂級大美容',
        kind: '大型',
        amount: 6000
      },
      {
        name: '頂級大美容',
        kind: '休旅車',
        amount: 7000
      },
      {
        name: '頂級大美容',
        kind: '特殊車款',
        amount: 8000
      },

      {
        name: '內裝美容',
        kind: '小型',
        amount: 2500
      },
      {
        name: '內裝美容',
        kind: '中型',
        amount: 3000
      },
      {
        name: '內裝美容',
        kind: '大型',
        amount: 3500
      },
      {
        name: '內裝美容',
        kind: '休旅車',
        amount: 4000
      },
      {
        name: '內裝美容',
        kind: '特殊車款',
        amount: 4800
      },


      {
        name: '局部美容',
        kind: '小型',
        amount: 300
      },
      {
        name: '局部美容',
        kind: '中型',
        amount: 300
      },
      {
        name: '局部美容',
        kind: '大型',
        amount: 300
      },
      {
        name: '局部美容',
        kind: '休旅車',
        amount: 300
      },
      {
        name: '局部美容',
        kind: '特殊車款',
        amount: 300
      },


      {
        name: '奈米殺菌除臭護理',
        kind: '小型',
        amount: 800
      },
      {
        name: '奈米殺菌除臭護理',
        kind: '中型',
        amount: 800
      },
      {
        name: '奈米殺菌除臭護理',
        kind: '大型',
        amount: 800
      },
      {
        name: '奈米殺菌除臭護理',
        kind: '休旅車',
        amount: 800
      },
      {
        name: '奈米殺菌除臭護理',
        kind: '特殊車款',
        amount: 800
      },

      {
        name: '塑膠鍍膜',
        kind: '小型',
        amount: 1000
      },
      {
        name: '塑膠鍍膜',
        kind: '中型',
        amount: 1200
      },
      {
        name: '塑膠鍍膜',
        kind: '大型',
        amount: 1400
      },
      {
        name: '塑膠鍍膜',
        kind: '休旅車',
        amount: 1600
      },
      {
        name: '塑膠鍍膜',
        kind: '特殊車款',
        amount: 1800
      },

      {
        name: '鋁圈鍍膜',
        kind: '小型',
        amount: 2000
      },
      {
        name: '鋁圈鍍膜',
        kind: '中型',
        amount: 2000
      },
      {
        name: '鋁圈鍍膜',
        kind: '大型',
        amount: 2000
      },
      {
        name: '鋁圈鍍膜',
        kind: '休旅車',
        amount: 2000
      },
      {
        name: '鋁圈鍍膜',
        kind: '特殊車款',
        amount: 2000
      },

      {
        name: '玻璃鍍膜(前檔) 保固4個月',
        kind: '小型',
        amount: 1000
      },
      {
        name: '玻璃鍍膜(前檔) 保固4個月',
        kind: '中型',
        amount: 1000
      },
      {
        name: '玻璃鍍膜(前檔) 保固4個月',
        kind: '大型',
        amount: 1200
      },
      {
        name: '玻璃鍍膜(前檔) 保固4個月',
        kind: '休旅車',
        amount: 1300
      },
      {
        name: '玻璃鍍膜(前檔) 保固4個月',
        kind: '特殊車款',
        amount: 1500
      },

      {
        name: '玻璃鍍膜(全車) 保固4個月',
        kind: '小型',
        amount: 2500
      },
      {
        name: '玻璃鍍膜(全車) 保固4個月',
        kind: '中型',
        amount: 2600
      },
      {
        name: '玻璃鍍膜(全車) 保固4個月',
        kind: '大型',
        amount: 2600
      },
      {
        name: '玻璃鍍膜(全車) 保固4個月',
        kind: '休旅車',
        amount: 3000
      },
      {
        name: '玻璃鍍膜(全車) 保固4個月',
        kind: '特殊車款',
        amount: 3500
      },

      {
        name: '玻璃鍍膜永久保固',
        kind: '小型',
        amount: 4500
      },
      {
        name: '玻璃鍍膜永久保固',
        kind: '中型',
        amount: 5000
      },
      {
        name: '玻璃鍍膜永久保固',
        kind: '大型',
        amount: 5000
      },
      {
        name: '玻璃鍍膜永久保固',
        kind: '休旅車',
        amount: 6000
      },
      {
        name: '玻璃鍍膜永久保固',
        kind: '特殊車款',
        amount: 7000
      },


      {
        name: '快速鍍膜',
        kind: '小型',
        amount: 700
      },
      {
        name: '快速鍍膜',
        kind: '中型',
        amount: 800
      },
      {
        name: '快速鍍膜',
        kind: '大型',
        amount: 900
      },
      {
        name: '快速鍍膜',
        kind: '休旅車',
        amount: 1000
      },
      {
        name: '快速鍍膜',
        kind: '特殊車款',
        amount: 1200
      },

      {
        name: '短期封體鍍膜(保固3個月)',
        kind: '小型',
        amount: 3000
      },
      {
        name: '短期封體鍍膜(保固3個月)',
        kind: '中型',
        amount: 3500
      },
      {
        name: '短期封體鍍膜(保固3個月)',
        kind: '大型',
        amount: 4000
      },
      {
        name: '短期封體鍍膜(保固3個月)',
        kind: '休旅車',
        amount: 4500
      },
      {
        name: '短期封體鍍膜(保固3個月)',
        kind: '特殊車款',
        amount: 5000
      },


      {
        name: '精緻鍍膜(保固6個月)',
        kind: '小型',
        amount: 8000
      },
      {
        name: '精緻鍍膜(保固6個月)',
        kind: '中型',
        amount: 9000
      },
      {
        name: '精緻鍍膜(保固6個月)',
        kind: '大型',
        amount: 10000
      },
      {
        name: '精緻鍍膜(保固6個月)',
        kind: '休旅車',
        amount: 11000
      },
      {
        name: '精緻鍍膜(保固6個月)',
        kind: '特殊車款',
        amount: 12000
      },


      {
        name: '頂級鍍膜(保固12個月)',
        kind: '小型',
        amount: 16000
      },
      {
        name: '頂級鍍膜(保固12個月)',
        kind: '中型',
        amount: 17000
      },
      {
        name: '頂級鍍膜(保固12個月)',
        kind: '大型',
        amount: 18000
      },
      {
        name: '頂級鍍膜(保固12個月)',
        kind: '休旅車',
        amount: 20000
      },
      {
        name: '頂級鍍膜(保固12個月)',
        kind: '特殊車款',
        amount: 22000
      },

      {
        name: '長效多層鍍膜(保固24個月)',
        kind: '小型',
        amount: 25000
      },
      {
        name: '長效多層鍍膜(保固24個月)',
        kind: '中型',
        amount: 26000
      },
      {
        name: '長效多層鍍膜(保固24個月)',
        kind: '大型',
        amount: 27000
      },
      {
        name: '長效多層鍍膜(保固24個月)',
        kind: '休旅車',
        amount: 30000
      },
      {
        name: '長效多層鍍膜(保固24個月)',
        kind: '特殊車款',
        amount: 32000
      },


      {
        name: '精緻鍍膜保養',
        kind: '小型',
        amount: 700
      },
      {
        name: '精緻鍍膜保養',
        kind: '中型',
        amount: 800
      },
      {
        name: '精緻鍍膜保養',
        kind: '大型',
        amount: 900
      },
      {
        name: '精緻鍍膜保養',
        kind: '休旅車',
        amount: 1000
      },
      {
        name: '精緻鍍膜保養',
        kind: '特殊車款',
        amount: 1200
      },


      {
        name: '頂級鍍膜保養',
        kind: '小型',
        amount: 1600
      },
      {
        name: '頂級鍍膜保養',
        kind: '中型',
        amount: 1700
      },
      {
        name: '頂級鍍膜保養',
        kind: '大型',
        amount: 1800
      },
      {
        name: '頂級鍍膜保養',
        kind: '休旅車',
        amount: 1900
      },
      {
        name: '頂級鍍膜保養',
        kind: '特殊車款',
        amount: 2200
      },


      {
        name: '長效鍍膜保養',
        kind: '小型',
        amount: 2100
      },
      {
        name: '長效鍍膜保養',
        kind: '中型',
        amount: 2200
      },
      {
        name: '長效鍍膜保養',
        kind: '大型',
        amount: 2300
      },
      {
        name: '長效鍍膜保養',
        kind: '休旅車',
        amount: 2500
      },
      {
        name: '長效鍍膜保養',
        kind: '特殊車款',
        amount: 2700
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('service', null, {});
  }
};
