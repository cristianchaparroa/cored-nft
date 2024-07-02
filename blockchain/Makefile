# The .env file should be filled or the next commands will fail
include .env

# It will deploy a Smart contract into the Core Chain Testnet. Once that is deployed it will be verified
# make contract=Factory owner=0x123 deploy
deploy:
	forge create 'src/$(contract).sol:$(contract)' \
		--rpc-url "https://rpc.test.btcs.network/" \
		--private-key $(PRIVATE_KEY) \
		--legacy \
		--constructor-args $(owner)

.PHONY:


# make contract=Counter address=0x90B71a3d5088fdF7C4EDFf038fDAa1ec11d38b16 verify
verify:
	forge verify-contract $(address) \
		'src/$(contract).sol:$(contract)' \
		 --verifier-url https://api.test.btcs.network/api \
		 --etherscan-api-key $(ETHERSCAN_API_KEY) \
		 --constructor-args $(owner)
.PHONY:

