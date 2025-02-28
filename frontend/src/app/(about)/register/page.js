import AddProduct from "@/src/components/Product/addproduct";
// import LottieAnimation from "@/src/components/Contact/LottieAnimation";
// import siteMetadata from "@/src/utils/siteMetaData";


// export const metadata = {
//   title: "Contact Me",
//   description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
// };


export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <AddProduct />
      </div>
    </section>
  );
}
