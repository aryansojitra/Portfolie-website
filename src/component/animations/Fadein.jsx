import React,{useState,useEffect,useRef} from "react"

const FadeIn=({children, delay=0, duration=500, threshold=0.1 })=>{
    const [isVisible,setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !isVisible){      
                setIsVisible(true);
                observer.unobserve(entry.target);
            }   
        },
        {
            threshold:threshold,
            rootMargin:'0px 0px -50px 0px' //trigger slightly before element is fully visible

        }
    )
        if (elementRef.current){
            observer.observe(elementRef.current);
        }
        return () =>{
            if (elementRef.current){
                observer.unobserve(elementRef.current);
            }   
        }   
    },[threshold,isVisible])
    return(
        <div 
            ref={elementRef}
            className={isVisible ? 'animation-fadeIn opacity-100' : 'opacity-0'}
            style={{
                animationDelay: isVisible ? `${delay}ms` : '0ms',
                animationDuration: `${duration}ms`,
                animationFillMode:'both'
            }}
        >
            {children}
        </div>
    )
}

export default FadeIn;