const StakingRewardsFactory = artifacts.require("StakingRewardsFactory"); 

module.exports = function(deployer) {
    deployer.deploy(StakingRewardsFactory,
        '0xc096332CAacF00319703558988aD03eC6586e704', // 奖励代币地址
        1648004400 // 激励奖励创世时间戳
    );
};