export const DataJSON = ({ ipAddress, setIpAddress, publicAddress, setPublicAddress }) => {
	return {
		steps: [
			{
				title: "Creating an AWS Account",
				items: [
					{
						type: "Text",
						content:
							"Follow this link to create an AWS account - we recommend this personally as it is the easiest to setup and most cost-effective. If you already have an account then you can login to the dashboard.",
					},
					{
						type: "Link",
						content: "https://portal.aws.amazon.com/billing/signup#/start/email",
					},
					{
						type: "Text",
						content: "Fill in the necessary details and log in to the dashboard where we will create an EC2 instance.",
					},
					{
						type: "Image",
						src: require("./images/image1.png"),
					},
					{
						type: "TextBlock",
						content: "Choose Personal Account",
					},
					{
						type: "Image",
						src: require("./images/image2.png"),
					},
					{
						type: "TextBlock",
						content: `When you are asked for the support plan, select 'Basic Support'`,
					},
					{
						type: "Text",
						content: "Now you should be ready to setup the EC2 Instance to run your Full Node.",
					},
				],
			},
			{
				title: "Creating an EC2 Instance",
				items: [
					{
						type: "Text",
						content: "To create an EC2 instance we first need to go to the EC2 dashboard. Once you've logged in, go to",
					},
					{
						type: "TextBlock",
						content: "Services ➜ EC2",
					},
					{
						type: "Text",
						content: "as detailed in the screenshot below.",
					},
					{
						type: "Image",
						src: require("./images/image3.png"),
					},
					{
						type: "Text",
						content: "Once you have entered the EC2 Dashboard, click on",
					},
					{
						type: "TextBlock",
						content: "Launch Instance",
					},
					{
						type: "Image",
						src: require("./images/image4.png"),
					},
					{
						type: "Text",
						content: "Copy the configuration of the EC2 Instance highlighted in the orange boxes below",
					},
					{
						type: "TextBlock",
						content: "Rename the EC2 to 'Vulcan Node'",
					},
					{
						type: "TextBlock",
						content: "Change the EC2 Operating System to 'Ubuntu'",
					},
					{
						type: "TextBlock",
						content: "Change the EC2 Type to 't3.xlarge' for 4 cores or 't3.2xlarge' for 8 cores",
					},
					{
						type: "Text",
						content: "4 cores is the recommended amount required but you may choose 8 cores to be on the safe side.",
					},
					{
						type: "Image",
						src: require("./images/image5.png"),
					},
					{
						type: "Image",
						src: require("./images/image6.png"),
					},
				],
			},
			{
				title: "Creating a Secure Key Pair for your EC2 Instance",
				items: [
					{
						type: "Text",
						content: "The Secure Key Pair is a file used to authenticate yourself to access the server. To create one, click",
					},
					{
						type: "TextBlock",
						content: "Create new Key Pair",
					},
					{
						type: "Text",
						content: "as shown in the screenshot.",
					},
					{
						type: "Image",
						src: require("./images/image7.png"),
					},
					{
						type: "Text",
						content: "Once the pop-up modal has opened, change the configuration as shown below...",
					},
					{
						type: "TextBlock",
						content: "Change the name to 'VulcanNode' (no spaces)",
					},
					{
						type: "TextBlock",
						content: "Make sure the key pair type is 'RSA'",
					},
					{
						type: "TextBlock",
						content: "Make sure the key pair format is '.pem'",
					},
					{
						type: "Image",
						src: require("./images/image8.png"),
					},
					{
						type: "Text",
						content: "Finally, click",
					},
					{
						type: "TextBlock",
						content: "Create Key Pair",
					},
					{
						type: "Text",
						content: "You should see the file being downloaded to your Downloads Folder.",
					},
					{
						type: "Image",
						src: require("./images/image9.png"),
					},
				],
			},
			{
				title: "Finishing the EC2 Instance Setup",
				items: [
					{
						type: "Text",
						content: "The final step is to configure the storage for your server. Scroll down a bit further to change the configuration shown below.",
					},
					{
						type: "TextBlock",
						content: "Change the GiB to 500",
					},
					{
						type: "TextBlock",
						content: "Make sure the volume is set to 'gp2'",
					},
					{
						type: "Image",
						src: require("./images/image10.png"),
					},
					{
						type: "TextBlock",
						content: "Finally, to finish your EC2 setup press Launch Instance",
					},
					{
						type: "Image",
						src: require("./images/image11.png"),
					},
				],
			},
			{
				title: "Connecting to Your Server (Part 1)",
				items: [
					{
						type: "Text",
						content:
							"To connect to your server, we need to be authenticated as a valid user. To do this we will use our .pem file in our Downloads Folder. As well as this, we also need our server IP Address to navigate to the correct server. We can get this from the running instances page which you should be on after launching the instance.",
					},
					{
						type: "Text",
						content: "Finally, to finish your EC2 setup press Launch Instance",
					},
					{
						type: "Text",
						content: "To copy your server's IP Address, click the copy button next to the address underneath...",
					},
					{
						type: "TextBlock",
						content: "Public IPv4 Address",
					},
					{
						type: "Input",
						placeholder: "Enter Your IP Address To Continue",
						action: (address) => setIpAddress(address),
					},
					{
						type: "Image",
						src: require("./images/image12.png"),
					},
				],
			},
			{
				title: "Connecting to Your Server (Part 2)",
				items: [
					{
						type: "Text",
						content: "The next step we need to do is the actual connection to the server. To do this, we need to open Terminal",
					},
					{
						type: "Text",
						content: "It is a built-in app in Mac that allows us to run commands and, in our case, connect to a server. To open this, open Spotlight by pressing...",
					},
					{
						type: "TextBlock",
						content: "Cmd + Space",
					},
					{
						type: "Text",
						content: "Once you are there, type...",
					},
					{
						type: "TextBlock",
						content: "Terminal",
					},
					{
						type: "Text",
						content: "open 'Terminal.app'.",
					},
					{
						type: "Image",
						src: require("./images/image13.png"),
					},
				],
			},
			{
				title: "Connecting to Your Server (Part 3)",
				items: [
					{
						type: "Text",
						content: "To connect to your server, copy and paste the commands shown one-by-one. After each paste, press enter to execute the command.",
					},
					{
						type: "Text",
						content: "Copy each command by pressing the orange copy button next to each command.",
					},
					{
						type: "Command",
						content: "cd",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: "cd ./Downloads/",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: "chmod 400 VulcanNode.pem && ssh -i VulcanNode.pem ubuntu@" + ipAddress,
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: "yes",
					},
					{
						type: "Text",
						content: "Press Enter. You are now successfully connected to your server.",
					},
					{
						type: "Image",
						src: require("./images/image14.png"),
					},
					{
						type: "Text",
						content: "Now we are connected, we can install all required packages for the node to be able to run on the server.",
					},
				],
			},
			{
				title: "Setting up the Node",
				items: [
					{
						type: "Text",
						content: "Let's now install all the required packages. Copy and paste the commands shown one-by-one. After each paste, press enter to execute the command.",
					},
					{
						type: "Text",
						content: "Copy each command by pressing the orange copy button next to each command.",
					},
					{
						type: "Command",
						content:
							"git clone https://github.com/hashpy-labs/goeth-safuux.git && wget https://go.dev/dl/go1.19.3.linux-amd64.tar.gz && sudo tar -xvzf go1.19.3.linux-amd64.tar.gz -C /usr/local/ && rm ~/.profile && wget -O ~/.profile https://raw.githubusercontent.com/PoiPlayz/node-stuff/main/.profile && exit",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Image",
						src: require("./images/image15.png"),
					},
					{
						type: "Command",
						content: "ssh -i VulcanNode.pem ubuntu@" + ipAddress,
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Image",
						src: require("./images/image16.png"),
					},
					{
						type: "Command",
						content: "sudo apt-get update && sudo apt-get install gcc && cd goeth-safuux/ && sudo apt-get install gcc && sudo apt install make && make geth && ./build/bin/geth --version",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Image",
						src: require("./images/image17.png"),
					},
					{
						type: "Command",
						content: "Y",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: 'cd ./build/bin && cp ./geth ../../../ && cd ../../../ && mkdir VulcanNode && cd VulcanNode && ../geth --datadir "./data" account new',
					},
					{
						type: "Text",
						content:
							"Press Enter and it will ask for a password - Create a strong password and store it safely. Once that is done, copy and paste the password here then press enter. THE TEXT WILL NOT SHOW UP WHEN YOU PASTE IT - this is fine, just paste it once then hit enter. Do the same when it asks to repeat the password - copy and paste. Let's move onto the next step.",
					},
					{
						type: "Image",
						src: require("./images/image18.png"),
					},
					{
						type: "Text",
						content:
							"Once the steps are complete, you will be given a public address and path to your secret key as shown in the screenshot (we have blocked out the information for security). Take a screenshot or copy and paste this information to a secure document. This step is VERY IMPORTANT. Without it, you will have no access to your funds. Paste your public address in the field below.",
					},
					{
						type: "Input",
						placeholder: "Enter Your Public Address To Continue",
						action: (address) => setPublicAddress(address),
					},
				],
			},
			{
				title: "Setting up the Node (Part 2)",
				items: [
					{
						type: "Text",
						content:
							"We now need to save our password in the server itself so it is secure. To do so, copy and paste the commands shown one-by-one. After each paste, press enter to execute the command.",
					},
					{
						type: "Text",
						content: "Copy each command by pressing the orange copy button next to each command.",
					},
					{
						type: "Command",
						content: "nano password.txt",
					},
					{
						type: "Text",
						content: "Press Enter. At this point, you need to copy your password again and paste it here. You can save the file and exit by pressing the following keys.",
					},
					{
						type: "TextBlock",
						content: "Ctrl + X",
					},
					{
						type: "TextBlock",
						content: "y",
					},
					{
						type: "TextBlock",
						content: "Enter",
					},
					{
						type: "Image",
						src: require("./images/image19.png"),
					},
				],
			},
			{
				title: "Finishing Server Setup",
				items: [
					{
						type: "Text",
						content: "We now just need to finish the last steps. Copy and paste the commands shown one-by-one. After each paste, press enter to execute the command.",
					},
					{
						type: "Text",
						content: "Copy each command by pressing the orange copy button next to each command.",
					},
					{
						type: "Command",
						content:
							"cd ../goeth-safuux/ && cp ./sfx.json ../VulcanNode && cd ../VulcanNode && ../geth --datadir ./data/ init ./sfx.json && (nohup ../geth --networkid 14333 --datadir ./data/ --port 30303 --ipcdisable --http --http.corsdomain https://test2-scan.safuux.com/ --http.port 8545 --syncmode full --allow-insecure-unlock --unlock " +
							publicAddress +
							" --password ./password.txt --mine --http.api personal,admin,db,eth,net,web3,miner,shh,txpool,debug,clique --gcmode=archive --bootnodes enode://831bb219ae97ba25e15714f0b2e4140dccb59fb8961b3b62109ea2a25fcf199003e6fbb5d58869c5921e6a671d0d21c3351637ca122ef4d6f1c31eb17456b87c@100.21.18.105:30303 &)",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: "cat nohup.out",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Image",
						src: require("./images/image20.png"),
					},
					{
						type: "Command",
						content: "sudo snap install geth && geth attach http://localhost:8545",
					},
					{
						type: "Text",
						content: "Press Enter. Now to check if your server is correctly running :)",
					},
					{
						type: "Image",
						src: require("./images/image22.png"),
					},
					{
						type: "Command",
						content: "clique.getSigners()",
					},
					{
						type: "Text",
						content: "Press Enter",
					},
					{
						type: "Command",
						content: "eth.accounts",
					},
					{
						type: "Text",
						content: "Press Enter - If you see your public address here then that means YOU DID IT! HOORAY! 🥳 Next is to add security to your server.",
					},
					{
						type: "Image",
						src: require("./images/image23.png"),
					},
				],
			},
			{
				title: "Adding Server Security",
				items: [
					{
						type: "Text",
						content: "We finally need to add security to finish our node setup. To do this, navigate back to your browser - you should still be on the server details page.",
					},
					{
						type: "Text",
						content: "On the details page you should see a button called Security as shown below. Click into it.",
					},
					{
						type: "Image",
						src: require("./images/image24.png"),
					},
					{
						type: "Text",
						content: "In the Security tab, press on the link to the security group",
					},
					{
						type: "Image",
						src: require("./images/image25.png"),
					},
					{
						type: "TextBlock",
						content: "Select Edit Inbound Rules",
					},
					{
						type: "Image",
						src: require("./images/image26.png"),
					},
					{
						type: "Text",
						content: "1) Press the Add Rule button twice",
					},
					{
						type: "Text",
						content: "2 ) Enter the ports 8545 and 30303 as shown below",
					},
					{
						type: "Text",
						content: "3 ) Add the IP addresses shown below with the corresponding ports",
					},
					{
						type: "TextBlock",
						content: "30303 ➜ 0.0.0.0/0",
					},
					{
						type: "TextBlock",
						content: "8545 ➜ 34.223.109.201/32",
					},
					{
						type: "Image",
						src: require("./images/image27.png"),
					},
					{
						type: "Text",
						content: "CONGRATS! ALL SECURITY HAS BEEN COMPLETED. You have now fully set up your server for your node.",
					},
				],
			},
		],
	};
};
