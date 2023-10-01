export async function generateMetadata() {
  // SEO Data Fetch
  return {
    title: "team",
    keyword: "",
  };
}

const Layout = ({children}) => {
    return (
        <div>
          {children}
        </div>
    )
}

export default Layout;