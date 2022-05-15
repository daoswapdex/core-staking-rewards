const StakingRewardsFactory = artifacts.require("StakingRewardsFactory"); 

module.exports = function(deployer) {
    deployer.deploy(StakingRewardsFactory,
        '0xdb5D970F03bfD19c1E51D57BcEd114BC35A0808f', // 奖励代币地址
        1652620800 // 激励奖励创世时间戳
    );
};