import React from "react";
export default function DataTable(data=[]){
    return<div>
         <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">PlayerName</th>
      <th scope="col">Player Country</th>
      <th scope="col">Team playing</th>
      <th scope="col">Skills</th>
      <th scope="col"> Jerrsy Number</th>
      <th scope="col">Auction Amount</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0 ?(
      data.map((player,index)=>(
        <tr key={`datatable-players-table-row-${index}`}>
    <th scope="row">{index+1}</th>
    <td>{player.PlayerName}</td>
    <td>{player.PlayerCountry}</td>
    <td>{player.Teamplaying}</td>
    <td>
                {player.skills.map((s, i) => (
                  <span
                    key={`player-${player.playerName}-skills`}
                    class="badge text-bg-primary"
                  >
                    {s}
                  </span>
                ))}
              </td>
    <td>{player.JerssyNumber}</td>
    <td>{player.AuctionAmount}</td>
    
            </tr>
          ))
        ) : (
          <h3>No Players found</h3>
        )}

    
   
  </tbody>
</table>
    </div>
}