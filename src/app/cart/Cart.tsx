"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import { v4 as uuidv4 } from "uuid";
import CartItem from "./components/CartItem";
import { CountedCartItemType } from "../types";

const mockedCartItems = [
  {
    id: 1,
    name: "Onomy2",
    descriptionEn:
      "Onomy consists of four pillars designed to be a self-governed monetary stabilization system. Onomy Network (ONET): An application specific Layer 1 blockchain leveraging Tendermint BFT consensus. Powers bi-directional bridges to prominent blockchains in and outside of the Cosmos ecosystem - such as Near, Aurora, Avalanche, Polygon, and more. Onomy Exchange (ONEX): A decentralized exchange that aims to replicate a traditional centralized exchange experience to settle the world's high-volume demands on-chain, decentralized, and non-custodially. It combines AMM Liquidity Pools with an Orderbook UI, enabling Liquidity Providers to earn yield and traders to engage in familiar orderbook trading strategies supporting market, limit, stop, and conditional orders. The ONEX will be both cross-chain and multi-chain. Paired with Onomy Access and Onomy's bridge network, ONEX enables users to seamlessly trade native assets between blockchains - or trade assets native to one specific blockchain. Onomy Access: A non-custodial multi-chain mobile wallet app through which users may manage all assets from integrated blockchains. This includes staking, governance, transferring assets, and even viewing your NFT collections from multiple blockchains - all on one singular wallet app. Access makes cross-chain and multi-chain user experience seamless. Connect to dApps by scanning a QR code - gone are the days of connecting various browser extensions to access Web3.",
    descriptionRu:
      "Onomy состоит из четырех столпов, призванных стать самоуправляемой системой денежной стабилизации. Сеть Onomy (ONET): Блокчейн уровня 1 для конкретного приложения, использующий консенсус Tendermint BFT. Обеспечивает двунаправленные мосты с известными блокчейнами в экосистеме Cosmos и за ее пределами, такими как Near, Aurora, Avalanche, Polygon и другими. Onomy Exchange (ONEX): децентрализованная биржа, целью которой является воспроизведение традиционного централизованного обмена для удовлетворения больших объемов мировых запросов в сети, децентрализованно и без хранения. Он сочетает в себе пулы ликвидности AMM с пользовательским интерфейсом книги ордеров, позволяя поставщикам ликвидности получать прибыль, а трейдерам использовать знакомые торговые стратегии книги ордеров, поддерживающие рыночные, лимитные, стоповые и условные ордера. ONEX будет как кроссчейн, так и мультичейн. В сочетании с Onomy Access и мостовой сетью Onomy, ONEX позволяет пользователям беспрепятственно обменивать собственные активы между блокчейнами или торговать активами, присущими одному конкретному блокчейну. Доступ к Onnomy: приложение мобильного кошелька с несколькими цепочками, не связанное с хранением, с помощью которого пользователи могут управлять всеми активами из интегрированных блокчейнов. Это включает в себя стейкинг, управление, передачу активов и даже просмотр ваших коллекций NFT из нескольких блокчейнов — и все это в одном приложении-кошельке. Access упрощает взаимодействие пользователей с несколькими и несколькими цепочками. Подключайтесь к dApps, сканируя QR-код — прошли времена, когда для доступа к Web3 подключались различные расширения браузера. Onnomy Reserve (ORES): управляет чеканкой децентрализованных стейблкоинов под названием Denom, используя NOM в качестве залога. Деномы могут использоваться для торговли иностранной валютой, платежей, денежных переводов, кредитования и расчетов».",
    blockQuoteEn:
      "Onomy is bridging Forex and Decentralized Finance through cross-chain liquidity aggregation and digital currencies.",
    blockQuoteRu:
      "Onomy объединяет Forex и децентрализованные финансы посредством агрегации ликвидности между цепочками и цифровых валют.",
    url: "https://onomy.io/",
    chain: "COSMOS",
    installationComplexity: "THREE",
    status: "ACTIVE",
    rating: "TWO",
    fieldOfActivity: "Crosschain",
    valid: true,
    monthlyPrice: 440,
    walletAddress: "",
    imageUrl: "",
    logo: "",
    twitter: "https://twitter.com/onomyprotocol",
    telegram: "https://t.me/onomyprotocol",
    discord: "https://discord.gg/Wjkbth2q8w",
    reddit: "",
    medium: "https://medium.com/onomy-protocol",
    github: "https://github.com/onomyprotocol",
  },
  {
    id: 6,
    name: "StarkNet",
    descriptionEn:
      "StarkNet is a permissionless ddd decentralized Validity-Rollup (also known as a “ZK-Rollup”). It operates as an L2 network over Ethereum, enabling any dApp to achieve unlimited scale for its computation – without compromising Ethereum’s composability and security, thanks to StarkNet’s reliance on the safest and most scalable cryptographic proof system – STARK. StarkNet Contracts and the StarkNet OS are written in Cairo – supporting the deployment and scaling of any use case, whatever the business logic.",
    descriptionRu:
      "StarkNet — это децентрализованный накопительный пакет достоверности DDD без разрешения (также известный как «ZK-накопительный пакет»). Он работает как сеть L2 поверх Ethereum, позволяя любому децентрализованному приложению достигать неограниченного масштаба для своих вычислений — без ущерба для компонуемости и безопасности Ethereum, благодаря тому, что StarkNet полагается на самую безопасную и масштабируемую систему криптографических доказательств — STARK. Контракты StarkNet и ОС StarkNet написаны в Каире, что позволяет развертывать и масштабировать любой вариант использования, независимо от бизнес-логики.",
    blockQuoteEn:
      "StarkNet is a permissionless decentralized Validity-Rollup (also known as a “ZK-Rollup”).",
    blockQuoteRu:
      "StarkNet — это децентрализованный накопительный пакет достоверности без разрешения (также известный как «ZK-накопительный пакет»).",
    url: "https://starknet.io/",
    chain: "L2",
    installationComplexity: "FIVE",
    status: "ACTIVE",
    rating: "FIVE",
    fieldOfActivity: "ZK",
    valid: true,
    monthlyPrice: 310,
    walletAddress: "",
    imageUrl: "",
    logo: "",
    twitter: "https://twitter.com/Starknet_Intern",
    telegram: "",
    discord: "https://discord.gg/KuU6STNAEB",
    reddit: "",
    medium: "https://medium.com/starkware/starknet/home",
    github: "https://github.com/starkware-libs",
  },
];

const totalCartItems: CountedCartItemType[] = mockedCartItems.reduce<
  CountedCartItemType[]
>((acc, item) => {
  const existingItem = acc.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.amount++;
    existingItem.totalPrice = existingItem.amount * existingItem.monthlyPrice;
  } else {
    acc.push({ ...item, amount: 1, totalPrice: item.monthlyPrice });
  }
  return acc;
}, []);

const orderPrice: number = totalCartItems.reduce((total, item) => {
  return total + item.totalPrice;
}, 0);

const Cart: FC = () => {
  const {
    WebApp: { MainButton, BackButton, themeParams },
  } = useTelegram();

  MainButton.setParams({
    text: `PAY ${orderPrice}$`,
  });

  BackButton.show();
  const router = useRouter();
  BackButton.onClick(() => {
    MainButton.setParams({
      text: "VIEW ORDER",
    });
    router.back();
  });

  const handleEdit = () => {
    MainButton.setParams({
      text: "VIEW ORDER",
    });
  };
  return (
    <div
      className="flex flex-col font-sans h-screen"
      style={{
        backgroundColor: themeParams?.secondary_bg_color,
      }}
    >
      <div
        className="flex justify-between py-5 px-6"
        style={{ backgroundColor: themeParams?.bg_color }}
      >
        <span className="font-bold" style={{ color: themeParams?.text_color }}>
          YOUR ORDER
        </span>
        <span className=" text-active">
          <Link href="/" onClick={handleEdit}>
            Edit
          </Link>
        </span>
      </div>
      {totalCartItems.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <div className=" pt-3 flex flex-col h-full">
        <input
          className="px-6 py-3 text-base focus:outline-none"
          placeholder="Add comment..."
          style={{
            color: themeParams?.text_color,
            backgroundColor: themeParams?.bg_color,
          }}
        />
        <span
          className="px-6 pt-3 pb-6 text-sm"
          style={{ color: themeParams?.hint_color }}
        >
          Any special requests, details, final wishes etc.
        </span>
      </div>
    </div>
  );
};
export default Cart;
