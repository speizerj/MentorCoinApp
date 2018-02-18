$(document).ready(function() {

  var token_abi = [{"inputs": [], "constant": true, "name": "mintingFinished", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "name", "outputs": [{"type": "string", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_spender"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "approve", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "totalSupply", "outputs": [{"type": "uint256", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_from"}, {"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "transferFrom", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "decimals", "outputs": [{"type": "uint8", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_to"}, {"type": "uint256", "name": "_amount"}], "constant": false, "name": "mint", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "version", "outputs": [{"type": "string", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_owner"}], "constant": true, "name": "balanceOf", "outputs": [{"type": "uint256", "name": "balance"}], "payable": false, "type": "function"}, {"inputs": [], "constant": false, "name": "finishMinting", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "owner", "outputs": [{"type": "address", "name": ""}], "payable": false, "type": "function"}, {"inputs": [], "constant": true, "name": "symbol", "outputs": [{"type": "string", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_to"}, {"type": "uint256", "name": "_value"}], "constant": false, "name": "transfer", "outputs": [{"type": "bool", "name": ""}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "_owner"}, {"type": "address", "name": "_spender"}], "constant": true, "name": "allowance", "outputs": [{"type": "uint256", "name": "remaining"}], "payable": false, "type": "function"}, {"inputs": [{"type": "address", "name": "newOwner"}], "constant": false, "name": "transferOwnership", "outputs": [], "payable": false, "type": "function"}, {"payable": false, "type": "fallback"}, {"inputs": [{"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "amount"}], "type": "event", "name": "Mint", "anonymous": false}, {"inputs": [], "type": "event", "name": "MintFinished", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}, {"indexed": true, "type": "address", "name": "spender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Approval", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "from"}, {"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Transfer", "anonymous": false}];
  var bounty_abi = [{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"killBounty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"getBountyToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_data","type":"string"}],"name":"fulfillBounty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newDeadline","type":"uint256"}],"name":"extendDeadline","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumBounties","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_fulfillmentId","type":"uint256"},{"name":"_data","type":"string"}],"name":"updateFulfillment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newFulfillmentAmount","type":"uint256"},{"name":"_value","type":"uint256"}],"name":"increasePayout","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newFulfillmentAmount","type":"uint256"}],"name":"changeBountyFulfillmentAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newIssuer","type":"address"}],"name":"transferIssuer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_value","type":"uint256"}],"name":"activateBounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_issuer","type":"address"},{"name":"_deadline","type":"uint256"},{"name":"_data","type":"string"},{"name":"_fulfillmentAmount","type":"uint256"},{"name":"_arbiter","type":"address"},{"name":"_paysTokens","type":"bool"},{"name":"_tokenContract","type":"address"}],"name":"issueBounty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_issuer","type":"address"},{"name":"_deadline","type":"uint256"},{"name":"_data","type":"string"},{"name":"_fulfillmentAmount","type":"uint256"},{"name":"_arbiter","type":"address"},{"name":"_paysTokens","type":"bool"},{"name":"_tokenContract","type":"address"},{"name":"_value","type":"uint256"}],"name":"issueAndActivateBounty","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"getBountyArbiter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_value","type":"uint256"}],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newPaysTokens","type":"bool"},{"name":"_newTokenContract","type":"address"}],"name":"changeBountyPaysTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"getBountyData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_fulfillmentId","type":"uint256"}],"name":"getFulfillment","outputs":[{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newArbiter","type":"address"}],"name":"changeBountyArbiter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newDeadline","type":"uint256"}],"name":"changeBountyDeadline","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_fulfillmentId","type":"uint256"}],"name":"acceptFulfillment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bounties","outputs":[{"name":"issuer","type":"address"},{"name":"deadline","type":"uint256"},{"name":"data","type":"string"},{"name":"fulfillmentAmount","type":"uint256"},{"name":"arbiter","type":"address"},{"name":"paysTokens","type":"bool"},{"name":"bountyStage","type":"uint8"},{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"getBounty","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bountyId","type":"uint256"},{"name":"_newData","type":"string"}],"name":"changeBountyData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_bountyId","type":"uint256"}],"name":"getNumFulfillments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"}],"name":"BountyIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":false,"name":"issuer","type":"address"}],"name":"BountyActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":true,"name":"fulfiller","type":"address"},{"indexed":true,"name":"_fulfillmentId","type":"uint256"}],"name":"BountyFulfilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_bountyId","type":"uint256"},{"indexed":false,"name":"_fulfillmentId","type":"uint256"}],"name":"FulfillmentUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":true,"name":"fulfiller","type":"address"},{"indexed":true,"name":"_fulfillmentId","type":"uint256"}],"name":"FulfillmentAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":true,"name":"issuer","type":"address"}],"name":"BountyKilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":true,"name":"contributor","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ContributionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"},{"indexed":false,"name":"newDeadline","type":"uint256"}],"name":"DeadlineExtended","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bountyId","type":"uint256"}],"name":"BountyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_bountyId","type":"uint256"},{"indexed":true,"name":"_newIssuer","type":"address"}],"name":"IssuerTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_bountyId","type":"uint256"},{"indexed":false,"name":"_newFulfillmentAmount","type":"uint256"}],"name":"PayoutIncreased","type":"event"}];
  var bounty_address = '0xf209d2b723b6417cbf04c07e733bee776105a073';
  var bounty = web3.eth.contract(bounty_abi).at(bounty_address);
  var _paysTokens = false;

  var account = web3.eth.defaultAccount;

  var dont_submit = true;

  $('#code-review-create').submit(function(e) {
    
    if (!dont_submit) {
      return true;
    }

    e.preventDefault();

    $('.bufficorn-modal').show();

    var metadata = {
            issueTitle : $('#id_pr_url').val(),
            issueDescription : $('#id_description').val(),
            issueKeywords : $('#id_keywords').val(),
            tokenName : 'ETH',
            githubUsername : $('#id_github_username').val(),
            notificationEmail : $('#id_notification_email').val(),
            fullName: $('#id_full_name').val(),
            experienceLevel : $('#id_experience_level').val(),
            projectLength : $('#id_project_length').val(),
            bountyType : 'Mentorship',
        }

    var ipfsBounty = {
            payload: {
                title: metadata.issueTitle,
                description: metadata.issueDescription,
                sourceFileName: "",
                sourceFileHash: "",
                sourceDirectoryHash: "",
                issuer: {
                    name: metadata.fullName,
                    email: metadata.notificationEmail,
                    githubUsername: metadata.githubUsername,
                    address: '', // Fill this in later
                },
                funders:[
                ],
                categories: metadata.issueKeywords.split(","),
                created: new Date().getTime()/1000|0,
                webReferenceURL: $('#id_pr_url').val(),
                // optional fields
                metadata: metadata,
            },
            meta: {
                platform: 'mentorcoin',
                schemaVersion: '0.0.1',
                schemaName: 'mentorcoinBounty',
            },
        }


    setTimeout(function() {
      ipfs.ipfsApi = new Ipfs({host: 'ipfs.infura.io', port: '5001', protocol: "https", root:'/api/v0'});
      ipfs.setProvider({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', root:'/api/v0'});

      ipfsBounty.payload.issuer.address = account;
      ipfs.addJson(ipfsBounty, IPFSCallback);
    },5000)

    




    // var bountyIndex = bounty.issueAndActivateBounty.estimateGas(
    //             account,            // _issuer
    //             expire_date,        // _deadline
    //             0x0,             // _data (ipfs hash)
    //             amount,             // _fulfillmentAmount
    //             0x0,                // _arbiter
    //             _paysTokens,              // _paysTokens
    //             '0x0000000000000000000000000000000000000000',       // _tokenContract
    //             amount,             // _value
    //             {                   // {from: x, to: y}
    //                 from :account,
    //                 value: amount,
    //                 gasPrice: web3.toHex(2 * Math.pow( 10, 9 ))
    //             },
    //             web3GasCallback        // callback for web3
    //         );

  })

  function IPFSCallback(err, res) {
    if (err) {
      console.log(err)
      return;
    }

    var amount = parseFloat($('#id_amount').val()) * Math.pow( 10, 18 );
    var expire_date = (parseInt($('#id_expires').val()) + (new Date().getTime()/1000|0) );

    $('.js-loading-text').text('Data loaded to IPFS! Please submit MetaMask transaction to complete the creation of the bounty.')

    
    console.log({
      'account': account,
      'expire_date': expire_date,
      'res': res,
      'amount': amount,
    })


    var bountyIndex = bounty.issueAndActivateBounty(
                account,            // _issuer
                expire_date,        // _deadline
                res,             // _data (ipfs hash)
                amount,             // _fulfillmentAmount
                0x0,                // _arbiter
                _paysTokens,              // _paysTokens
                '0x0000000000000000000000000000000000000000',       // _tokenContract
                amount,             // _value
                {                   // {from: x, to: y}
                    from :account,
                    value: amount,
                    gasPrice: web3.toHex(2 * Math.pow( 10, 9 )),
                },
                web3Callback        // callback for web3
            );
    }


  // function web3GasCallback(err, res) {
  //   if (!err) {
  //     var bountyIndex = bounty.issueAndActivateBounty(
  //               account,            // _issuer
  //               expire_date,        // _deadline
  //               '',             // _data (ipfs hash)
  //               amount,             // _fulfillmentAmount
  //               0x0,                // _arbiter
  //               _paysTokens,              // _paysTokens
  //               '0x0000000000000000000000000000000000000000',       // _tokenContract
  //               amount,             // _value
  //               {                   // {from: x, to: y}
  //                   from :account,
  //                   value: amount,
  //                   gasPrice: web3.toHex(2 * Math.pow( 10, 9 )),
  //               },
  //               web3Callback        // callback for web3
  //           );
  //   } else {
  //     console.log(err)
  //   }
  // }

  function web3Callback(err, res) {
    if (err) {
      console.log(err);
      $('.bufficorn-modal').hide();
      alert('Something went wrong.')
      return;
    }
    
    dont_submit = false
    console.log(res)
    $('#code-review-create').submit();
  }

})