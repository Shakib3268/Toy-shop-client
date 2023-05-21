
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";

const Addtoy = () => {
  const{user}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addtoy",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
      console.log(result)
    })
    console.log(data)
  };

  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl font-bold text-green-500 underline mb-2">Add Toy</h2>
      <div className="card card-body bg-base-300 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex justify-center gap-3">
            <label className="label">
              <span className="label-text font-bold">Toy Picture:</span>
            </label>
            <input placeholder="image-link" type='url' {...register("picture")} />
            <label className="label">
              <span className="label-text font-bold">Toy Name:</span>
            </label>
            <input
              placeholder="Toy-Name"
              {...register("Name", { required: true })}
            />
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Price:</span>
            </label>
            <input placeholder="Price" {...register("price")} />
            <label className="label">
              <span className="label-text font-bold">ratings:</span>
            </label>
            <input
              placeholder="Ratings"
              {...register("ratings", { required: true })}
            />
          </div>
          <select className="text-input w-1/2 mt-3" {...register("category")}>
              <option value="Spider toy">Spiderman toys</option>
              <option value="Iron toy">IronMan Toys</option>
              <option value="Hulk toy">Hulk Toys</option>
              <option value="Thor toy"> Thor Toys</option>
            </select>
            <div className="flex justify-center gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Seller Email:</span>
            </label>
            <input value={user?.email} type='email'  placeholder="Seller Email" {...register("email")} />
            <label className="label">
              <span className="label-text font-bold">Seller Name:</span>
            </label>
            <input
              placeholder="Seller Name"
              {...register("SellerName", { required: true })}
            />
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <label className="label">
              <span className="label-text font-bold">Available Quantity:</span>
            </label>
            <input placeholder="Quantity" {...register("quantity")} />
            <label className="label">
              <span className="label-text font-bold">Description:</span>
            </label>
            <input
              placeholder="Descriptions"
              {...register("description", { required: true })}
            />
          </div>

          <input className="mt-4 btn" type="submit" value='Add Toy' />
        </form>
      </div>
    </div>
  );
};

export default Addtoy;
