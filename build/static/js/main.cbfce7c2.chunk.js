(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(f,e,t){f.exports=t(569)},225:function(f,e,t){},305:function(f,e,t){},338:function(f,e){},340:function(f,e){},365:function(f,e){},381:function(f,e){},383:function(f,e){},414:function(f,e){},559:function(f,e,t){},569:function(f,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),b=t(24),s=t.n(b),c=(t(225),t(64)),i=t.n(c),o=t(118),r=t(45),u=t(46),l=t(49),d=t(47),p=t(50),m=t(63),y=t(48),h=t(211),v=t.n(h),w=t(212),g=t.n(w),E=t(82),k=t.n(E),x=t(44),M=t.n(x),O=Object(y.createMuiTheme)({palette:{primary:{main:"#5332a0"},secondary:{main:"#11cb5f"}}});var j=Object(y.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(f){var e=f.classes;return n.a.createElement(y.MuiThemeProvider,{theme:O},n.a.createElement("div",{className:e.root},n.a.createElement(v.a,{position:"static",color:"primary"},n.a.createElement(g.a,null,n.a.createElement(k.a,{variant:"h6",color:"inherit",className:e.grow},"ERC20 - Asset Generator"),n.a.createElement(M.a,{color:"inherit"},"Create Your Token quick and Easy")))))}),S=(t(305),t(213)),_=t.n(S),T=(t(488),t(559),t(214)),A=t.n(T),C=t(218),N=t.n(C),q=t(216),F=t.n(q),Y=t(217),$=t.n(Y),B=t(215),D=t.n(B),G=t(219),L=t.n(G),P=function(f){function e(){var f,t;Object(r.a)(this,e);for(var a=arguments.length,n=new Array(a),b=0;b<a;b++)n[b]=arguments[b];return(t=Object(l.a)(this,(f=Object(d.a)(e)).call.apply(f,[this].concat(n)))).state={open:!0},t.handleClose=function(){t.setState({open:!1})},t}return Object(p.a)(e,f),Object(u.a)(e,[{key:"render",value:function(){var f=this.props.fullScreen;return n.a.createElement("div",null,n.a.createElement(A.a,{fullScreen:f,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title"},n.a.createElement(D.a,{id:"responsive-dialog-title"},"Oops!!"),n.a.createElement(F.a,null,n.a.createElement($.a,null,"Make sure you filled all the fields.",n.a.createElement("br",null),"Make sure that token name and symbol contains only alphabets",n.a.createElement("br",null),"Make sure that decimals and max supply is numberic")),n.a.createElement(N.a,null,n.a.createElement(M.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Agree"))))}}]),e}(n.a.Component),z=L()()(P),J=function(f){function e(){var f,t;Object(r.a)(this,e);for(var a=arguments.length,n=new Array(a),b=0;b<a;b++)n[b]=arguments[b];return(t=Object(l.a)(this,(f=Object(d.a)(e)).call.apply(f,[this].concat(n)))).state={email:"",trulyFilled:!0},t.handleSubmit=function(f){var e=/^[a-z]+$/i,a=/^\w+(\s+\w+)*$/i,n=/^[0-9]+$/i;f.preventDefault();var b=f.target;console.log(a.test(b.name.value)),e.test(b.sym.value)&&(e.test(b.name.value)||a.test(b.name.value))&&n.test(b.supply.value)&&n.test(b.decimals.value)?t.props.genrateToken(b.sym.value,b.name.value,b.supply.value,b.decimals.value):t.setState({trulyFilled:!1})},t}return Object(p.a)(e,f),Object(u.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"parent"},n.a.createElement("div",{className:"child"},n.a.createElement("form",{className:"data-form",onSubmit:this.handleSubmit.bind(this)},n.a.createElement("input",{required:!0,type:"text",name:"sym",placeholder:"Token Symbol"}),n.a.createElement("input",{required:!0,type:"text",name:"name",placeholder:"Token Name"}),n.a.createElement("input",{required:!0,type:"number",name:"supply",placeholder:"Max Supply"}),n.a.createElement("input",{required:!0,type:"number",name:"decimals",placeholder:"Decimals"}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit"},"Submit"))),n.a.createElement("i",{className:"fa fa-bitcoin",style:{fontSize:"80px",color:"white",position:"absolute",marginLeft:"44%",marginTop:"65px"}})),this.state.trulyFilled?"":n.a.createElement(z,null))}}]),e}(a.Component),R=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_subtractedValue",type:"uint256"}],name:"decreaseApproval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_addedValue",type:"uint256"}],name:"increaseApproval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_maxSupply",type:"uint256"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],U="0x60806040526000600160146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001e7c38038062001e7c8339810180604052810190808051906020019092919080518201929190602001805182019291906020018051906020019092919050505033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000db600654600a0a85620001246401000000000262001c04179091906401000000009004565b6008819055508260049080519060200190620000f99291906200015a565b508160059080519060200190620001129291906200015a565b50806006819055505050505062000209565b600080828402905060008414806200014757508284828115156200014457fe5b04145b15156200015057fe5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019d57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001cd578251825591602001919060010190620001b0565b5b509050620001dd9190620001e1565b5090565b6200020691905b8082111562000202576000816000905550600101620001e8565b5090565b90565b611c6380620002196000396000f300608060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610117578063095ea7b3146101a757806318160ddd1461020c57806323b872dd1461023757806327e235e3146102bc578063313ce567146103135780633f4ba83a1461033e5780635c658165146103555780635c975abb146103cc57806366188463146103fb57806370a08231146104605780638456cb59146104b75780638da5cb5b146104ce57806395d89b4114610525578063a0712d68146105b5578063a9059cbb146105fa578063d5abeb011461065f578063d73dd6231461068a578063dd62ed3e146106ef578063f2fde38b14610766575b600080fd5b34801561012357600080fd5b5061012c6107a9565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016c578082015181840152602081019050610151565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101b357600080fd5b506101f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610847565b604051808215151515815260200191505060405180910390f35b34801561021857600080fd5b506102216109e0565b6040518082815260200191505060405180910390f35b34801561024357600080fd5b506102a2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109e6565b604051808215151515815260200191505060405180910390f35b3480156102c857600080fd5b506102fd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e0e565b6040518082815260200191505060405180910390f35b34801561031f57600080fd5b50610328610e26565b6040518082815260200191505060405180910390f35b34801561034a57600080fd5b50610353610e2c565b005b34801561036157600080fd5b506103b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eec565b6040518082815260200191505060405180910390f35b3480156103d857600080fd5b506103e1610f11565b604051808215151515815260200191505060405180910390f35b34801561040757600080fd5b50610446600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f24565b604051808215151515815260200191505060405180910390f35b34801561046c57600080fd5b506104a1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d1565b6040518082815260200191505060405180910390f35b3480156104c357600080fd5b506104cc61121a565b005b3480156104da57600080fd5b506104e36112da565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561053157600080fd5b5061053a611300565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561057a57808201518184015260208101905061055f565b50505050905090810190601f1680156105a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105c157600080fd5b506105e06004803603810190808035906020019092919050505061139e565b604051808215151515815260200191505060405180910390f35b34801561060657600080fd5b50610645600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611540565b604051808215151515815260200191505060405180910390f35b34801561066b57600080fd5b506106746117d0565b6040518082815260200191505060405180910390f35b34801561069657600080fd5b506106d5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506117d6565b604051808215151515815260200191505060405180910390f35b3480156106fb57600080fd5b50610750600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119ee565b6040518082815260200191505060405180910390f35b34801561077257600080fd5b506107a7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a75565b005b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b505050505081565b6000600160149054906101000a900460ff1615151561086557600080fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156108f057600080fd5b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60075481565b6000600160149054906101000a900460ff16151515610a0457600080fd5b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610acf575081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b8015610b5a5750600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b1515610b6557600080fd5b610bb782600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bcd90919063ffffffff16565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c4c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611beb90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d1e82600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611beb90919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60026020528060005260406000206000915090505481565b60065481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8857600080fd5b600160149054906101000a900460ff161515610ea357600080fd5b6000600160146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6003602052816000526040600020602052806000526040600020600091509150505481565b600160149054906101000a900460ff1681565b600080600160149054906101000a900460ff16151515610f4357600080fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611051576000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110e5565b6110648382611beb90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561127657600080fd5b600160149054906101000a900460ff1615151561129257600080fd5b60018060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113965780601f1061136b57610100808354040283529160200191611396565b820191906000526020600020905b81548152906001019060200180831161137957829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113fc57600080fd5b61141182600754611bcd90919063ffffffff16565b6008541015151561142157600080fd5b61143682600754611bcd90919063ffffffff16565b60078190555061148e82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bcd90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050919050565b6000600160149054906101000a900460ff1615151561155e57600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015801561162c5750600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401115b151561163757600080fd5b61168982600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611beb90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061171e82600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bcd90919063ffffffff16565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60085481565b6000600160149054906101000a900460ff161515156117f457600080fd5b61188382600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bcd90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611ad157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611b0d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000808284019050838110151515611be157fe5b8091505092915050565b6000828211151515611bf957fe5b818303905092915050565b60008082840290506000841480611c255750828482811515611c2257fe5b04145b1515611c2d57fe5b80915050929150505600a165627a7a723058206e289b41638b3e5adde6103bf732b9d5bc0d5154e9e67afeab18f4ee1cb921370029",V=function(f){function e(){var f;return Object(r.a)(this,e),(f=Object(l.a)(this,Object(d.a)(e).call(this))).componentDidMount=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new _.a(window.ethereum),e.prev=1,e.next=4,window.ethereum.enable();case 4:return e.next=6,t.eth.getAccounts();case 6:(a=e.sent).length?(console.log(a),f.setState({account:a[0],web3:t})):alert("You've locked your MetaMask"),t.currentProvider.publicConfigStore.on("update",function(e){f.setState({account:e.selectedAddress}),console.log(f.state.account)}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}},e,this,[[1,11]])})),f.generateToken=function(){var e=Object(o.a)(i.a.mark(function e(t,a,n,b){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==f.state.web3){e.next=2;break}return e.abrupt("return");case 2:new f.state.web3.eth.Contract(R).deploy({data:U,arguments:[n,a,t,b]}).send({from:f.state.account},function(f,e){this.setState({deploying:!0,hash:e})}.bind(Object(m.a)(Object(m.a)(f)))).on("error",function(f){alert(f)}).on("receipt",function(e){f.setState({deploying:!1,deployed:!0,hash:e.contractAddress})});case 4:case"end":return e.stop()}},e,this)}));return function(f,t,a,n){return e.apply(this,arguments)}}(),f.state={account:null,incorrect:!1,web3:void 0,deploying:!1,deployed:!1,hash:""},f}return Object(p.a)(e,f),Object(u.a)(e,[{key:"render",value:function(){var f;return f=null==this.state.account||void 0===this.state.account?n.a.createElement("div",{className:"metamask"},n.a.createElement("i",{className:"fa fa-circle",style:{color:"red",margin:"4px"}}),"Metamask Locked"):n.a.createElement("div",{className:"metamask"},n.a.createElement("i",{className:"fa fa-circle",style:{color:"green",margin:"4px"}}),"Metamask Unlocked"),n.a.createElement("div",{className:"App"},n.a.createElement(j,null),f,n.a.createElement(J,{genrateToken:this.generateToken.bind(this)}),this.state.deploying&&this.state.web3?n.a.createElement("h3",{style:{textAlign:"center",marginTop:"100px"}},"Your Transaction hash is ",this.state.hash," Kindly wait for your transaction to complete"):"",this.state.deployed&&this.state.web3?n.a.createElement("h3",{style:{textAlign:"center",marginTop:"100px"}},"Your contract address is ",this.state.hash):"")}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(f){f.unregister()})}},[[220,2,1]]]);
//# sourceMappingURL=main.cbfce7c2.chunk.js.map