const StakingRewardsFactory = artifacts.require("StakingRewardsFactory"); 

module.exports = function(deployer) {
    deployer.deploy(StakingRewardsFactory,
        '0xd1c3d3cB6CE2D43aaBe8d1A78Dd5ADa60e5166c9', // 奖励代币地址
        1653733200 // 激励奖励创世时间戳
    );
};