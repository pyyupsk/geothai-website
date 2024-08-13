import GeoThaiIcon from '@/assets/images/icons/GeoThai-icon.png'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
    return <Image src={GeoThaiIcon} alt="Logo" className={className} width={32} height={32} />
}
