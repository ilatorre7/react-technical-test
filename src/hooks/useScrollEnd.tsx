import { useEffect } from "react";

export const useScrollEnd = ({ isLoading, onScrollEnd }: { isLoading: boolean, onScrollEnd : () => void }) => {
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 && !isLoading){
        onScrollEnd()
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
}