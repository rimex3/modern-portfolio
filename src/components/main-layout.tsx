import Container from "./container"
import Navbar from "./layout/navbar"


interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <main className="w-full h-max overflow-x-hidden pt-7 pb-5">
            <Container>
                <Navbar />
                {children}
            </Container>

        </main >
    )
}
