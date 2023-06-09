import React from "react";
import BasicChecks from"../Element/checks/BasicChecks"
import BasicTextField from"../Element/Textfield/BasicTextfield";
import { TeamsPlaying } from "../mocks/mocks";

export default function SimpleModal({
  handleChange = (e) => {},
  handleSubmit = (e) => {},
  data = {},
}) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD PLAYERS
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <BasicTextField
                id="playerName"
                placeholder="Enter Players Name"
                label="Player Name"
                type="text"
                onChange={handleChange}
                value={data["playerName"]}
              />
              <BasicTextField
                id="playerCountry"
                placeholder="Enter Player Country"
                label="Player Country"
                type="text"
                onChange={handleChange}
                value={data["playerCountry"]}
              />
              <div className="row">
                <div className="col-6">
                  <label for="playerCountry" class="form-label">
                    Team Playing
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    id="playerTeam"
                    value={data["playerTeam"]}
                  >
                    <option selected>Select Team</option>
                    {TeamsPlaying.map((team, index) => (
                      <option
                        key={`add-player-modal-select-teams-${index}`}
                        value={team}
                      >
                        {team}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <BasicTextField
                    id="jerseyNumber"
                    placeholder="Enter Jersey Number"
                    label="Jersey Number"
                    type="number"
                    onChange={handleChange}
                    value={data["jerseyNumber"]}
                  />
                </div>
              </div>
              <div className="row mb-2 p-2">
                <h4 className="p-0 mb-2">PLAYER SKILLS</h4>
                <BasicChecks
                  onChange={handleChange}
                  label="BATSMAN"
                  id="batsman"
                  checked={
                    data["skills"].indexOf("batsman") > -1 ? true : false
                  }
                />
                <BasicChecks
                  onChange={handleChange}
                  label="BOWLER"
                  id="bowler"
                  checked={data["skills"].indexOf("bowler") > -1 ? true : false}
                />
                <BasicChecks
                  onChange={handleChange}
                  label="WICKET KEEPER"
                  id="keeper"
                  checked={data["skills"].indexOf("keeper") > -1 ? true : false}
                />
                <BasicChecks
                  onChange={handleChange}
                  label="All ROUNDER"
                  id="allrounder"
                  checked={
                    data["skills"].indexOf("allrounder") > -1 ? true : false
                  }
                />
              </div>
              <BasicTextField
                id="auctionAmount"
                placeholder="Enter Auction Amount"
                label="Auction Amount"
                type="number"
                onChange={handleChange}
                value={data["auctionAmount"]}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-warning"
                onClick={handleSubmit}
              >
                ADD PLAYER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}