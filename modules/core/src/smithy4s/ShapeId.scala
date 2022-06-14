/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s

case class ShapeId(namespace: String, name: String) extends HasId {
  def show = s"$namespace#$name"
  def withMember(member: String): ShapeId.Member = ShapeId.Member(this, member)
  override def toString = show
  override def id: ShapeId = this
}

object ShapeId extends ShapeTag.Companion[ShapeId] {

  val id = ShapeId("smithy4s", "ShapeId")
  val schema: Schema[ShapeId] = Schema
    .struct(
      Schema.string.required[ShapeId]("namespace", _.namespace),
      Schema.string.required[ShapeId]("name", _.name)
    )(ShapeId(_, _))
    .withId(id)

  case class Member(shapeId: ShapeId, member: String)
}
