
export function InputBox({label , placeholder , onChange , type}){
return (
  <>
  <div className="text-sm font-medium text-left py-1" >{label}</div>
  <input type={type} placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200"/>
  </>
)
}



// export function InputBox({label, placeholder, onChange}) {
//     return <div>
//       <div className="text-sm font-medium text-left py-2">
//         {label}
//       </div>
//       <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
//     </div>
// }