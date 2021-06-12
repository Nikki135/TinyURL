import React from 'react';
import { useForm } from 'react-hook-form';
export const Shortenurl = () =>{
    const { register, handleSubmit } = useForm();
    // return <div className = "container">Shorten URL</div>
    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })
return(
    <div className="container">
    <div className="mt-3">
    <h3>Shorten URL</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className = "form-group" >
    <label htmlFor="longurl">URL</label>
    <input className = "form-control" type="url" name="longurl" id="longurl" {...register("longurl")} />
    </div>
    <div className = "form-group">
    <button type= "submit" class="btn btn-primary">ShortenURL</button>
    </div>
    
    </form>
    </div>
    
    </div>
)


}
 // <input className = "form-control" ref={register} type="url" name="longurl" id="longurl"/>